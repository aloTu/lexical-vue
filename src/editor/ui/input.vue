<script lang="ts" setup>
const model = defineModel<string>();
</script>

<template>
	<!-- <input class="editor-input" v-model="model" /> -->
	<span class="input-wrapper" contenteditable="true">{{ model}}</span>
</template>

<style lang="less" scoped>
.editor-input {
	border: solid 1px #ccc;
	border-radius: 8px;
	padding: 8px 6px;
}
.input-wrapper {
	border: solid 1px #ccc;
	border-radius: 8px;
	padding: 8px 6px;
}
</style>
