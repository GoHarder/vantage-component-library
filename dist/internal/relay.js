import { get_current_component } from 'svelte/internal';
import { toDashCase } from '@vantage-js/string';
export default class Relay {
    init;
    update;
    comp;
    events = [];
    constructor() {
        this.comp = get_current_component();
        this.override();
    }
    action(node, props) {
        if (this.init)
            this.init(node);
        if (this.update)
            this.update(node, props);
        this.init?.bind(this)(node);
        this.listen(node);
        return {
            update: (props) => {
                this.update?.bind(this)(node, props);
            },
            destroy: () => {
                this.destroy.bind(this)(node);
            },
        };
    }
    on(type, handler) {
        this.events.push({ type, handler });
    }
    listen(node) {
        this.events.forEach(({ type, handler }) => {
            node.addEventListener(type, handler);
        });
    }
    destroy(node) {
        this.events.forEach(({ type, handler }) => {
            node.removeEventListener(type, handler);
        });
    }
    override() {
        this.comp.$on = (type, handler) => {
            if (typeof handler !== 'function')
                return () => { };
            this.events.push({ type, handler });
            const callbacks = this.comp.$$.callbacks[type] || (this.comp.$$.callbacks[type] = []);
            callbacks.push(handler);
            return () => {
                const index = callbacks.indexOf(handler);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        };
    }
    static props(props, filter) {
        const filterSet = new Set([...filter, ...filter.map(toDashCase)]);
        filter = ['$$slots', '$$scope', ...filterSet];
        const output = {};
        for (const key in props) {
            if (filter.includes(key))
                continue;
            output[key] = props[key];
        }
        return output;
    }
}
