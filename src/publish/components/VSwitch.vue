<template>
	<span
		:class="['switch__spring', props.checked ? 'on' : '']"
		role="switch"
		:title="props.checked ? '선택됨' : null">
		<span class="ball"></span>
		<label for="switch">스위치연결</label>
		{{ props.checked }}
	</span>
</template>

<script setup>
const props = defineProps({
	checked: {
		type: Boolean,
		default: false,
	},
})
</script>
