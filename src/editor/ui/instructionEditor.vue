<template>

</template>

<script lang="ts" setup>
  import type { IInstruction, IConfig } from '../test.vue';
  defineModel<IInstruction[]>();
  const props = defineProps<{config: IConfig}>();
</script>