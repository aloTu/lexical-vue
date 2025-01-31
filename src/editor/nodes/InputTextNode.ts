import { addClassNamesToElement } from "@lexical/utils";
import { TextNode, createCommand } from "lexical";
import type {
  NodeKey,
  EditorConfig,
  LexicalNode,
  LexicalCommand,
  SerializedElementNode,
  SerializedLexicalNode,
} from "lexical";

export class InputTextNode extends TextNode {
  __text: string
  __placeholder: string;

  constructor(placeholder?: string, key?: NodeKey) {
    super(' ', key);
    this.__text = ' ';
    this.__placeholder = placeholder ?? "";
  }

  static getType(): string {
    return "input-text";
  }

  static clone(node: InputTextNode): InputTextNode {
    return new InputTextNode(node.__placeholder, node.__key);
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
    prevNode: InputTextNode,
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
