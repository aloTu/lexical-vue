import { $createParagraphNode, $createTextNode, $getRoot } from 'lexical';
import { $createColoredNode } from './nodes/ColoredNode';

import { $createInputNode } from './nodes/inputNode';

export default function $prepopulatedRichText() {
  const root = $getRoot();
  if (root.getFirstChild() !== null) {
    return;
  }

  const paragraph = $createParagraphNode();
  paragraph.append(
    $createTextNode('This is a demo environment built with '),
    $createTextNode('lexical').toggleFormat('code'),
    $createTextNode('.'),
    $createTextNode(' Try typing in '),
    $createTextNode('some text').toggleFormat('bold'),
    $createTextNode(' with '),
    $createColoredNode('text', 'red'),
    $createTextNode('different').toggleFormat('italic'),
    $createTextNode(' formats.'),
  );
  root.append(paragraph);
  const input1 = $createInputNode("hhh")
  root.append(input1)
  const input2 = $createInputNode("zzz")
  root.append(input2)
}
