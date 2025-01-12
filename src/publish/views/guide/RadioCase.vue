<template>
	<strong id="group_radio_lb01">라디오 그룹</strong>
	<ul role="radiogroup" aria-labelledby="group_radio_lb01">
		<li role="none" v-for="(item, i) in radioList" :key="i">
			<VRadio :checked="radioCheck === i" @click="radioCheck = i">{{ item.text }}</VRadio>
		</li>
	</ul>
</template>

<script setup>
import VRadio from '@/publish/components/VRadio.vue'
import { ref } from 'vue'
const radioCheck = ref()
const radioList = ref([
	{
		text: '좋아요',
	},
	{
		text: '싫어요',
	},
	{
		text: '보통',
	},
])
</script>

<style lang="scss" scoped></style>
