import { DecoratorNode, LexicalNode, NodeKey } from "lexical";
import type { SerializedLexicalNode } from "lexical";
import { h, VNode } from "vue";
import Input from "../ui/input.vue";

export class InputDecoratorNode extends DecoratorNode<VNode> {
    __text: string;

    static getType(): string {
        return "input";
    }

    static clone(node: InputDecoratorNode): InputDecoratorNode {
        return new InputDecoratorNode(node.__text, node.__key);
    }
    constructor(text: string, key?: NodeKey) {
        super(key);
        this.__text = text;
    }

    createDOM(): HTMLElement {
        const elem = document.createElement("div");
        elem.style.display = "inline-block";
        return elem;
    }

    updateDOM(): boolean {
        return false;
    }

    setText(text: string): void {
        const self = this.getWritable();
        self.__text = text;
    }

    exportJSON(): SerializedLexicalNode {
        return {
            type: "input",
            version: 1,
        };
    }

    decorate(): VNode {
        return h(Input, {
            modelValue: this.__text,
            "onUpdate:modelValue": () => this.setText,
        });
    }
}

export function $createInputNode(id: string): InputDecoratorNode {
    return new InputDecoratorNode(id);
}

export function $isInputNode(
    node: LexicalNode | null | undefined
): node is InputDecoratorNode {
    return node instanceof InputDecoratorNode;
}
