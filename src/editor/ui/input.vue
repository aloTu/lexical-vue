<script lang="ts" setup>
const model = defineModel<string>();
</script>

<template>
	<input class="editor-input" v-model="model" />
</template>

<style lang="less" scoped>
.editor-input {
	border: solid 1px #ccc;
	border-radius: 8px;
	padding: 8px 6px;
}
</style>
