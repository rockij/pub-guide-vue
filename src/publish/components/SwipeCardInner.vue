<template>
	<article ref="container" :class="btnView">
		<div class="inner" ref="target">
			<slot></slot>
		</div>
	</article>
</template>

<script setup>
import { useSwipe } from '@vueuse/core'
import { ref, computed, onMounted } from 'vue'

const emits = defineEmits(['end:left', 'end:right', 'end:down'])
const target = ref(null)
const container = ref(null)
const containerWidth = computed(() => container.value.offsetWidth)
const containerHeight = computed(() => container.value.offsetHeight)
const btnView = ref()
const targetWidth = ref()

const boxSize = () => {
	targetWidth.value = container.value.offsetWidth
}
onMounted(() => {
	boxSize()
	window.addEventListener('resize', boxSize)
})

const { direction, lengthX, lengthY } = useSwipe(target, {
	passive: true,
	onSwipeEnd() {
		if (
			direction.value === 'left' &&
			lengthX.value > 0 &&
			containerWidth.value &&
			Math.abs(lengthX.value) / containerWidth.value >= 0.2
		) {
			container.value.classList.add('swipe_left')
			setTimeout(() => {
				emits('end:left')
			}, 300)
		} else if (
			direction.value === 'right' &&
			lengthX.value < 0 &&
			containerWidth.value &&
			Math.abs(lengthX.value) / containerWidth.value >= 0.2
		) {
			container.value.classList.add('swipe_right')
			setTimeout(() => {
				emits('end:right')
			}, 300)
		} else if (
			direction.value === 'down' &&
			lengthY.value < 0 &&
			containerHeight.value &&
			Math.abs(lengthY.value) / containerHeight.value >= 0.2
		) {
			emits('end:down')
		}
	},
})
</script>
