<template>
	<div class="tool-header"><button class="tool-item" @click="insertColorNode">插入Input</button></div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import type { LexicalEditor } from "lexical";
import { INSERT_INPUTTEXT_NODE_COMMAND } from "../nodes/InputTextNode";
const editor = inject<LexicalEditor>("lexical-editor");

const insertColorNode = () => {
	editor?.dispatchCommand(INSERT_INPUTTEXT_NODE_COMMAND, undefined);
};
</script>

<style lang="less" scoped>
.tool-header {
	background: aliceblue;
	margin-bottom: 12px;
	.tool-item {
		height: 100%;
		overflow: hidden;
	}
}
</style>
