<template>
	<VTooltip :isShow="true" content="나는 툴팁입니다" :buttonConfig="buttonConfig"></VTooltip>
	<VTooltip
		:isShow="true"
		:hideOnClick="false"
		content="나를 닫지는 못한다"
		:buttonConfig="buttonConfig"></VTooltip>
</template>

<script setup>
import { ref } from 'vue'

import VBtn from '@/publish/components/VButton.vue'
import VTooltip from '@/publish/components/VTooltip.vue'

const buttonConfig = ref({
	label: '클릭',
	callback: () => alert('클릭됨'),
})
</script>
