<template>
	<div class="editor-wrapper">
		<ToolbarPlugin />
		<div ref="root" class="editor" contenteditable="true"></div>
		<component :is="defineComponent({ name: 'LexicalDecoratedTeleports', setup: () => () => decorators })" />
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineComponent, provide } from "vue";
import { createEditor } from "lexical";
import { mergeRegister } from "@lexical/utils";
import { registerDragonSupport } from "@lexical/dragon";
import { createEmptyHistoryState, registerHistory } from "@lexical/history";
import { registerRichText } from "@lexical/rich-text";
import { registerPlainText } from '@lexical/plain-text';

import { InputTextNode } from "./nodes/InputTextNode";
import { InstructNode } from "./nodes/InstructNode";

import prepopulatedRichText from "./prepopulatedRichText";
import { useDecorators } from "./tools/useDecorators";
import ToolbarPlugin from "./plugins/ToolbarPlugin.vue";

const config = {
	namespace: "MyEditor",
	nodes: [InputTextNode, InstructNode],
	onError: console.error
};
const editor = createEditor(config);
const root = ref<HTMLElement | null>(null);
const decorators = useDecorators(editor);

provide("lexical-editor", editor);

const state = ref<string | null>(null);

onMounted(() => {
	if (root.value) {
		editor.setRootElement(root.value);
	}
	mergeRegister(
		// registerRichText(editor),
		registerPlainText(editor),
		registerDragonSupport(editor),
		registerHistory(editor, createEmptyHistoryState(), 300)
	);
	editor.update(prepopulatedRichText, { tag: "history-merge" });

	editor.registerUpdateListener(({ editorState }) => {
		state.value = JSON.stringify(editorState.toJSON(), undefined, 2);
	});
});
</script>

<style lang="less" scoped>
.editor-wrapper {
	border: solid 1px #ccc;
	border-radius: 8px;
	padding: 8px 6px;
	width: 800px;

	.editor {
		min-height: 300px;
	}
}
</style>
<style lang="less">
.input-text {
	padding: 2px 4px;
	margin: 0 2px;
	border: solid 1px #ccc;
	background: gray;
	&::before{
		content: "[Input]";
	}
}
</style>
