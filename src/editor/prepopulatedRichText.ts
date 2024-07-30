import { $createTextNode, $getRoot } from 'lexical';

import { $createInputTextNode } from "./nodes/InputTextNode";
import { $createInstructNode } from "./nodes/InstructNode";

export default function $prepopulatedRichText() {
  const root = $getRoot();
  if (root.getFirstChild() !== null) {
    return;
  }

  const instruct = $createInstructNode();
  instruct.append(
    $createTextNode('Try typing in '),
    $createInputTextNode('this'),
    $createTextNode('with'),
  );
  root.append(instruct);
}
