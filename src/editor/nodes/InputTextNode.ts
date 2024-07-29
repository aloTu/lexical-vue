import { ElementNode, createCommand } from "lexical";
import type {
  NodeKey,
  EditorConfig,
  LexicalNode,
  LexicalCommand,
  SerializedElementNode,
  SerializedLexicalNode,
} from "lexical";

export class InputTextNode extends ElementNode {
  __placeholder: string;
  __text: string;

  constructor(placeholder?: string, key?: NodeKey) {
    super(key);
    this.__text = "";
    this.__placeholder = placeholder ?? "";
  }

  static getType(): string {
    return "input-text";
  }

  static clone(node: InputTextNode): InputTextNode {
    return new InputTextNode(node.__placeholder, node.__key);
  }

  createDOM(config: EditorConfig): HTMLElement {
    const element = document.createElement("input");
    element.style.color = "red";
    return element;
  }

  exportJSON(): SerializedElementNode<SerializedLexicalNode> {
    return {
      type: "input-text",
      version: 1,
      children: [],
      direction: null,
      format: "",
      indent: 0,
    };
  }

  updateDOM(
    prevNode: InputTextNode,
    dom: HTMLElement,
    config: EditorConfig
  ): boolean {
    return false;
  }

  isUnmergeable() {
    return true;
  }

  isIsolated() {
    return true;
  }
}

export function $createInputTextNode(placeholder?: string): InputTextNode {
  return new InputTextNode(placeholder);
}

export const INSERT_INPUTTEXT_NODE_COMMAND: LexicalCommand<void> =
  createCommand("INSERT_INPUTTEXT_NODE_COMMAND ");

export function $isInputTextNode(
  node: LexicalNode | null | undefined
): node is InputTextNode {
  return node instanceof InputTextNode;
}
