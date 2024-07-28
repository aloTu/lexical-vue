<template>
	<div class="tool-header"><button @click="insertColorNode">插入Input</button></div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import type { LexicalEditor } from "lexical";
import { INSERT_COLOR_NODE_COMMAND } from "../nodes/ColoredNode";
const editor = inject<LexicalEditor>("lexical-editor");

const insertColorNode = () => {
	editor?.dispatchCommand(INSERT_COLOR_NODE_COMMAND, undefined);
};
</script>
