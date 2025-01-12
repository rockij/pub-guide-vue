<template>
	<strong>싱글 체크박스</strong><br />
	<div class="checkbox__group">
		<VCheckbox :checked="checked" @click="checked = !checked"
			>약관 내용에 동의합니다.</VCheckbox
		>
		<VBtn
			:color="'cancel'"
			:height="'sm'"
			:variant="'back'"
			class="btn_view"
			title="약관 제목 상세보기"
			>&gt;</VBtn
		>
	</div>

	<br />

	<strong id="group_chk_lb01">체크박스 그룹</strong>
	<ul role="group" aria-labelledby="group_chk_lb01">
		<li role="none" v-for="(item, i) in checkedList" :key="i">
			<VCheckbox :checked="item.value" @click="item.value = !item.value">
				{{ item.text }}
			</VCheckbox>
		</li>
	</ul>
</template>

<script setup>
import VCheckbox from '@/publish/components/VCheckbox.vue'
import { ref } from 'vue'
const checked = ref(true)
const checkedList = ref([
	{
		text: '사과',
		value: false,
	},
	{
		text: '오렌지',
		value: false,
	},
	{
		text: '체리',
		value: false,
	},
])
</script>

<style lang="scss" scoped></style>
