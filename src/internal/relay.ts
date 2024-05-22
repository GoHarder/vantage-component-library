// NOTE: It's an internal function might change with Svelte version 5.
// @ts-ignore
import { get_current_component } from 'svelte/internal';

import { toDashCase } from '@vantage-js/string';

// MARK: Types

import type { SvelteComponent } from 'svelte';

type MdTagNameMap = {
  [Key in keyof HTMLElementTagNameMap as Key extends `md-${string}` ? Key : never]: HTMLElementTagNameMap[Key];
};

interface MdEventMap extends HTMLElementEventMap {
  closed: Event;
}

export type MdEvent<E extends keyof MdEventMap, T extends keyof MdTagNameMap> = MdEventMap[E] & {
  target: MdTagNameMap[T];
};

// type Test = MdEvent<'click', 'md-filled-button'>;

// MARK: Code
export default class Relay<Tag extends keyof MdTagNameMap, Props = {}, MdComp extends MdTagNameMap[Tag] = MdTagNameMap[Tag]> {
  init?: (node: MdTagNameMap[Tag]) => void;
  update?: (node: MdTagNameMap[Tag], props: Props) => void;
  private comp: SvelteComponent;
  private events: { type: string; handler: (event: any) => void }[] = [];

  constructor() {
    this.comp = get_current_component();
    this.override();
  }

  action<MdNode extends MdComp>(node: MdNode, props: Props) {
    if (this.init) this.init(node);
    if (this.update) this.update(node, props);

    this.init?.bind(this)(node);

    this.listen(node);

    return {
      update: (props: Props) => {
        this.update?.bind(this)(node, props);
      },
      destroy: () => {
        this.destroy.bind(this)(node);
      },
    };
  }

  private listen(node: Node) {
    this.events.forEach(({ type, handler }) => {
      node.addEventListener(type, handler);
    });
  }

  private destroy(node: Node) {
    this.events.forEach(({ type, handler }) => {
      node.removeEventListener(type, handler);
    });
  }

  private override() {
    this.comp.$on = (type: string, handler: (event: any) => void) => {
      if (typeof handler !== 'function') return () => {};

      this.events.push({ type, handler });

      const callbacks = this.comp.$$.callbacks[type] || (this.comp.$$.callbacks[type] = []);

      callbacks.push(handler);

      return () => {
        const index = callbacks.indexOf(handler);
        if (index !== -1) callbacks.splice(index, 1);
      };
    };
  }

  /**
   * Returns a copy of the given props object with any keys found in the filter array removed.
   * This is useful for filtering out Svelte props that are not relevant to a particular component.
   * @param props The props object to filter
   * @param filter The array of keys to remove from the props object
   */
  static props(props: Record<string, any>, filter: string[]): Partial<typeof props> {
    const filterSet = new Set([...filter, ...filter.map(toDashCase)]);
    filter = ['$$slots', '$$scope', ...filterSet];

    const output: Partial<typeof props> = {};

    for (const key in props) {
      if (filter.includes(key)) continue;
      output[key] = props[key];
    }

    return output;
  }
}
