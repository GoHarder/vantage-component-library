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

// MARK: Code
export default class Relay<Tag extends keyof MdTagNameMap, Props = {}, MdComp extends MdTagNameMap[Tag] = MdTagNameMap[Tag]> {
  init?: (node: MdTagNameMap[Tag]) => void;
  update?: (node: MdTagNameMap[Tag], props: Props) => void;
  private comp: SvelteComponent;
  private events: { type: string; handler: (event: any) => void }[] = [];

  /**
   * Constructs a new instance of the class.
   *
   * This constructor initializes the `comp` property with the result of calling the `get_current_component` function
   * from the `svelte/internal` module. It then calls the `override` method to override the `$on` method of the component.
   */
  constructor() {
    this.comp = get_current_component();
    this.override();
  }

  /**
   * Executes the action on the given node with the provided props.
   * @param {MdNode} node - The node on which the action is performed.
   * @param {Props} props - The props used for the action.
   * @return {{ update: (props: Props) => void; destroy: () => void; }} - An object with methods to update and destroy the action.
   */
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

  /**
   * Adds an event listener to the list of events.
   * @param type - The type of event to listen for.
   * @param handler - The function to call when the event is triggered.
   */
  on<K extends keyof MdEventMap>(type: K, handler: (event: MdEvent<K, Tag>) => void) {
    this.events.push({ type, handler });
  }

  /**
   * Listens for events on the given node and adds event listeners for each event in the events array.
   * @param node - The node to listen for events on.
   */
  private listen<MdNode extends MdComp>(node: MdNode) {
    this.events.forEach(({ type, handler }) => {
      // @ts-ignore
      node.addEventListener(type, handler);
    });
  }

  /**
   * Destroys the event listeners attached to the given node.
   * @param node - The node to remove event listeners from.
   */
  private destroy<MdNode extends MdComp>(node: MdNode) {
    this.events.forEach(({ type, handler }) => {
      // @ts-ignore
      node.removeEventListener(type, handler);
    });
  }

  /**
   * Overrides the `$on` method of the component to add event listeners for each event in the events array.
   */
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
