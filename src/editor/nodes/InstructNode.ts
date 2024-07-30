import { addClassNamesToElement } from '@lexical/utils';
import { $applyNodeReplacement, ElementNode } from 'lexical';

export class InstructNode extends ElementNode {
    static getType() {
        return 'instruct';
    }

    static clone(node) {
        return new InstructNode(node.__key);
    }


    exportJSON() {
        return {
            ...super.exportJSON(),
            type: this.getType(),
            version: 1,
        };
    }

    createDOM() {
        const element = document.createElement('div');
        addClassNamesToElement(element, 'instruct');
        return element;
    }

    // element node不用update
    updateDOM() {
        return false;
    }

    canMergeWith() {
        return false;
    }

    canInsertAfter() {
        return false;
    }

    canInsertTextBefore() {
        return false;
    }

    canInsertTextAfter() {
        return false;
    }
    canBeEmpty() {
        return false;
    }

    isInline() {
        return true;
    }
}

export const $createInstructNode = () => {
    return new InstructNode();
};

export const $isInstructNode = (node: InstructNode) => {
    return node instanceof InstructNode;
};
