type MdTagNameMap = {
    [Key in keyof HTMLElementTagNameMap as Key extends `md-${string}` ? Key : never]: HTMLElementTagNameMap[Key];
};
export default class Relay<Tag extends keyof MdTagNameMap, Props = {}, MdComp extends MdTagNameMap[Tag] = MdTagNameMap[Tag]> {
    private svComp;
    init?: (node: MdTagNameMap[Tag]) => void;
    update?: (node: MdTagNameMap[Tag], props: Props) => void;
    constructor();
    action<MdNode extends MdComp>(node: MdNode, props: Props): {
        update: (props: Props) => void;
        destroy: () => void;
    };
    static props(props: Record<string, any>, filter: string[]): Partial<typeof props>;
}
export {};
