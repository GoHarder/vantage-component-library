import { get_current_component } from 'svelte/internal';
import { toDashCase } from '@vantage-js/string';
export default class Relay {
    svComp;
    init;
    update;
    constructor() {
        this.svComp = get_current_component();
    }
    action(node, props) {
        if (this.init)
            this.init(node);
        if (this.update)
            this.update(node, props);
        return {
            update: (props) => {
                this.update?.bind(this)(node, props);
            },
            destroy: () => { },
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
