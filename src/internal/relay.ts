// NOTE: It's an internal function might change with Svelte version 5.
// @ts-ignore
import { get_current_component } from 'svelte/internal';

import { toDashCase } from '@vantage-js/string';

/* Types
 * ------------------------------------------------------------------- */

import type { SvelteComponent } from 'svelte';
import type { ActionReturn } from 'svelte/action';

type MdTagNameMap = {
  [Key in keyof HTMLElementTagNameMap as Key extends `md-${string}` ? Key : never]: HTMLElementTagNameMap[Key];
};

interface MdEventMap extends HTMLElementEventMap {
  closed: Event;
}

/* Code
 * ------------------------------------------------------------------- */

export default class Relay<Tag extends keyof MdTagNameMap, Props = {}, MdComp extends MdTagNameMap[Tag] = MdTagNameMap[Tag]> {
  private svComp: SvelteComponent;

  init?: (node: MdTagNameMap[Tag]) => void;

  update?: (node: MdTagNameMap[Tag], props: Props) => void;

  constructor() {
    this.svComp = get_current_component();
  }

  action<MdNode extends MdComp>(node: MdNode, props: Props) {
    if (this.init) this.init(node);
    if (this.update) this.update(node, props);

    return {
      update: (props: Props) => {
        this.update?.bind(this)(node, props);
      },
      destroy: () => {},
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
