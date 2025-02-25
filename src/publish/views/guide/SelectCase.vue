<template>
	<strong>single</strong><br />
	<VSelectbox v-model:selectName="selectName" v-model:list="list"></VSelectbox>
</template>

<script setup>
import VSelectbox from '@/publish/components/VSelectbox.vue'
import { ref } from 'vue'

const selectName = ref('나는 셀렉트박스다')
const list = ref([
	{
		text: '2025년 1월',
		labelText: '1월',
		selected: false,
	},
	{
		text: '2025년 2월',
		labelText: '2월',
		selected: false,
	},
])
</script>
