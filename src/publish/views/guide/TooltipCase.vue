<template>
	<Tippy
		content="툴팁내용입니다"
		animation="fade"
		trigger="click"
		:hideOnClick="true"
		placement="bottom
			">
		<VBtn color="primary" height="sm" variant="back">tooltip</VBtn>
	</Tippy>

	<Tippy animation="fade" trigger="click" :hideOnClick="true" placement="bottom">
		<VBtn color="primary" height="sm" variant="back">tooltip (templet)</VBtn>
		<template #content> 툴팁내용입니다 </template>
	</Tippy>
</template>

<script setup>
import { Tippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import VBtn from '@/publish/components/VButton.vue'
</script>
