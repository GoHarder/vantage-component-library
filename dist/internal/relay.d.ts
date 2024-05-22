type MdTagNameMap = {
    [Key in keyof HTMLElementTagNameMap as Key extends `md-${string}` ? Key : never]: HTMLElementTagNameMap[Key];
};
interface MdEventMap extends HTMLElementEventMap {
    closed: Event;
}
export type MdEvent<E extends keyof MdEventMap, T extends keyof MdTagNameMap> = MdEventMap[E] & {
    target: MdTagNameMap[T];
};
export default class Relay<Tag extends keyof MdTagNameMap, Props = {}, MdComp extends MdTagNameMap[Tag] = MdTagNameMap[Tag]> {
    init?: (node: MdTagNameMap[Tag]) => void;
    update?: (node: MdTagNameMap[Tag], props: Props) => void;
    private comp;
    private events;
    constructor();
    action<MdNode extends MdComp>(node: MdNode, props: Props): {
        update: (props: Props) => void;
        destroy: () => void;
    };
    on<K extends keyof MdEventMap>(type: K, handler: (event: MdEvent<K, Tag>) => void): void;
    private listen;
    private destroy;
    private override;
    static props(props: Record<string, any>, filter: string[]): Partial<typeof props>;
}
export {};
