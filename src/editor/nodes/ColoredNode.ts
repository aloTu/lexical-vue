import { TextNode, createCommand } from 'lexical'
import type { NodeKey, EditorConfig, LexicalNode, LexicalCommand, SerializedTextNode } from 'lexical'

export class ColoredNode extends TextNode {
  __color: string;

  constructor(text?: string, color?: string, key?: NodeKey) {
    super(text ?? '', key);
    this.__color = color ?? 'red';
  }

  static getType(): string {
    return 'colored';
  }

  static clone(node: ColoredNode): ColoredNode {
    return new ColoredNode(node.__text, node.__color, node.__key);
  }

  createDOM(config: EditorConfig): HTMLElement {
    const element = super.createDOM(config);
    element.textContent = '#'
    element.style.color = this.__color;
    return element;
  }

  updateDOM(
    prevNode: ColoredNode,
    dom: HTMLElement,
    config: EditorConfig,
  ): boolean {
    const isUpdated = super.updateDOM(prevNode, dom, config);
    if (prevNode.__color !== this.__color) {
      dom.style.color = this.__color;
    }
    return isUpdated;
  }

  exportJSON(): SerializedTextNode {
    return {
      ...super.exportJSON(),
      type: 'colored',
      version: 1,
      style: this.__color
    };
  }

  isUnmergeable() {
    return true
  }
}

export function $createColoredNode(text?: string, color?: string): ColoredNode {
  return new ColoredNode(text, color);
}

export const INSERT_COLOR_NODE_COMMAND: LexicalCommand<void> = createCommand(
  "INSERT_COLOR_NODE_COMMAND "
);

export function $isColoredNode(node: LexicalNode | null | undefined): node is ColoredNode {
  return node instanceof ColoredNode;
}