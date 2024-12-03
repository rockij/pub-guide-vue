<template>
	<div ref="target">
		<slot></slot>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
	ready: {
		type: Boolean,
		default: false,
	},
})

const excuted = ref(false)
const target = ref()

function scroll() {
	const docElement = document.documentElement
	let scrollTop = docElement.scrollTop
	if (scrollTop > target.value.offsetTop - 200) {
		if (!excuted.value) {
			console.log('실행')
			target.value.classList.add('on')
			excuted.value = true
		}
	}
	if (Math.ceil(scrollTop) + docElement.clientHeight >= docElement.scrollHeight) {
		if (!excuted.value) {
			console.log('마지막실행')
			target.value.classList.add('on')
			excuted.value = true
		}
	}
}
onMounted(() => {
	if (props.ready === true) {
		console.log('바로실행')
		target.value.classList.add('on')
	} else {
		document.addEventListener('scroll', scroll)
	}
})
onUnmounted(() => {
	document.removeEventListener('scroll', scroll)
})
</script>
