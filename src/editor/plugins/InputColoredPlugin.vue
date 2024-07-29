<script lang="ts" setup>
import { inject, onMounted } from "vue";
import type { LexicalEditor } from "lexical";
import { COMMAND_PRIORITY_EDITOR } from "lexical";
import { $insertNodeToNearestRoot } from "@lexical/utils";
import {
$createColoredNode
  INSERT_INPUTTEXT_NODE_COMMAND,
} from "../nodes/ColoredNode";

const editor = inject<LexicalEditor>("lexical-editor");

onMounted(() => {
  editor?.registerCommand(
    INSERT_INPUTTEXT_NODE_COMMAND,
    () => {
      const inputText = $createInputTextNode();
      $insertNodeToNearestRoot(inputText);

      return true;
    },
    COMMAND_PRIORITY_EDITOR
  );
});
</script>
