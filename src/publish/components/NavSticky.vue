<template>
	<div class="sticky__area" ref="stickyArea" :style="{ height: navHeight }">
		<div ref="sticky" :class="isFixed">
			<slot>스크롤 중 일부 영역 상단 고정 </slot>
		</div>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const sticky = ref(null)
const stickyArea = ref(null)
const navHeight = ref(sticky.value)
const isFixed = ref(null)
onMounted(() => {
	navHeight.value = sticky.value.offsetHeight + 'px'
	const stickyObserver = new IntersectionObserver(
		([e]) => {
			if (!e.isIntersecting) isFixed.value = 'isFixed'
			else isFixed.value = ''
		},
		{
			root: null,
			threshold: [1],
		},
	)
	stickyObserver.observe(stickyArea.value)
})

onUnmounted(() => {})
</script>
