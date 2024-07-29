<template>
  <InstructionEditor v-model="state" :config="config"/>
</template>

<script lang="ts" setup>
import { ref, h } from 'vue'
import type {VNode} from 'vue'
import InstructionEditor from './ui/instructionEditor.vue'
export interface IInstruction {
  type: 'text'|'input'
  data: Record<string, string>
}
export interface IConfig {
  components: Record<string, (text: string, data: Record<string, string>)=>VNode|string>
}
const state = ref<IInstruction[]>([])


const config:IConfig = {
  components : {
    'text': (text:string) => text,
    'input': (_text:string,data: Record<string, string>) => h('input', { value: data.value })
  }
}
</script>