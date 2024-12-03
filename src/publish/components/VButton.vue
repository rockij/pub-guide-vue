<template>
	<button
		ref="button"
		type="button"
		:class="`${customClass} ${props.color} ${variantType} ${sizeHeight} ${rippleValue}`"
		:style="`width: ${props.block === true ? '100%' : ''}`">
		<slot v-if="$slots.iconPrepend" name="iconPrepend"></slot>
		<slot></slot>
		<slot v-if="$slots.iconAppend" name="iconAppend"></slot>
	</button>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
	// 버튼색
	color: {
		type: String,
		default: '',
	},
	// 세로크기
	height: {
		type: String,
		default: '',
	},
	// 버튼모양
	variant: {
		type: String,
		default: null,
	},
	// width 100%
	block: {
		type: Boolean,
		default: false,
	},
	// ripple
	ripple: {
		type: Boolean,
		default: false,
	},
})

const sizeHeight = computed(() => {
	if (props.height === 'xs') {
		return 'height_xs'
	} else if (props.height === 'sm') {
		return 'height_sm'
	} else if (props.height === 'm') {
		return 'height_m'
	} else if (props.height === 'lg') {
		return 'height_lg'
	} else if (props.height === 'xl') {
		return 'height_xl'
	} else {
		return ''
	}
})

const variantType = computed(() => {
	if (props.variant === 'back') {
		return 'btn__back'
	} else if (props.variant === 'outline') {
		return 'btn__outline'
	} else if (props.variant === 'icon') {
		return 'btn__icon'
	} else {
		return ''
	}
})

const rippleValue = computed(() => {
	return props.ripple === true ? 'btn__ripple' : ''
})

const customClass = computed(() => {
	return props.variant === 'text' ? '' : 'btn__basic'
})

const button = ref()
function mousePositionToCustomProp(event, element) {
	let posX = event.offsetX
	let posY = event.offsetY
	element.style.setProperty('--x', posX + 'px')
	element.style.setProperty('--y', posY + 'px')
}
onMounted(() => {
	button.value.addEventListener('click', e => {
		if (props.ripple === true) {
			mousePositionToCustomProp(e, button.value)
			button.value.classList.add('pulse')
			button.value.addEventListener(
				'animationend',
				() => {
					button.value.classList.remove('pulse')
				},
				{ once: true },
			)
		}
	})
})
</script>
