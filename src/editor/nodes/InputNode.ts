import { addClassNamesToElement } from "@lexical/utils";
import { TextNode, createCommand } from "lexical";
import type {
  NodeKey,
  EditorConfig,
  LexicalNode,
  LexicalCommand
} from "lexical";

export class InputNode extends Element {
  __text: string
  __placeholder: string;

  constructor(placeholder?: string, key?: NodeKey) {
    super();
    this.__text = ' ';
    this.__placeholder = placeholder ?? "";
  }

  static getType(): string {
    return "input-text";
  }

  static clone(node: InputNode): InputNode {
    return new InputNode(node.__placeholder);
  }

  createDOM(config: EditorConfig): HTMLElement {
    const element = document.createElement("span");
    addClassNamesToElement(element, "input-text");
    element.style.color = "red";
    element.setAttribute("aria-placeholde", `[${this.__placeholder}]`);
    return element;
  }

  exportJSON() {
    return {
      ...super.exportJSON(),
      type: this.getType(),
      version: 1,
    }
  }

  updateDOM(
    prevNode: InputNode,
    dom: HTMLElement,
    config: EditorConfig
  ): boolean {
    return false;
  }

  isUnmergeable() {
    return true;
  }

  canBeEmpty() {
    return true
  }
}

export function $createInputTextNode(placeholder?: string): InputNode {
  return new InputNode(placeholder);
}

export const INSERT_INPUTTEXT_NODE_COMMAND: LexicalCommand<void> =
  createCommand("INSERT_INPUTTEXT_NODE_COMMAND ");

export function $isInputTextNode(
  node: LexicalNode | null | undefined
): node is InputNode {
  return node instanceof InputNode;
}
