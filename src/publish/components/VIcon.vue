<template>
	<i :class="`icon__${bgName}`" :style="`width:${width / 10}rem; height:${height / 10}rem;`"></i>
</template>

<script setup>
defineProps({
	width: {
		type: Number,
		default: null,
		required: true,
	},
	height: {
		type: Number,
		default: null,
		required: true,
	},
	bgName: {
		type: String,
		default: '',
		required: true,
	},
})
</script>
