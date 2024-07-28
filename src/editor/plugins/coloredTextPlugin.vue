<script lang="ts" setup>
import { inject, onMounted } from "vue";
import type { LexicalEditor } from "lexical";
import { $getSelection, $isRangeSelection, COMMAND_PRIORITY_EDITOR } from "lexical";
import { $insertNodeToNearestRoot } from "@lexical/utils";
import { $createColoredNode, INSERT_COLOR_NODE_COMMAND } from "../nodes/ColoredNode";

const editor = inject<LexicalEditor>("lexical-editor");

onMounted(() => {
	editor?.registerCommand(
		INSERT_COLOR_NODE_COMMAND,
		() => {
			const selection = $getSelection();

			if (!$isRangeSelection(selection)) {
				return false;
			}

			const focusNode = selection.focus.getNode();

			if (focusNode !== null) {
				const coloredText = $createColoredNode();
				$insertNodeToNearestRoot(coloredText);
			}

			return true;
		},
		COMMAND_PRIORITY_EDITOR
	);
});
</script>
