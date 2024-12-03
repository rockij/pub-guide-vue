<template>
	<RouterLink
		:class="`${customClass} ${props.color} ${variantType} ${sizeHeight}`"
		:style="`width: ${props.block === true ? '100%' : ''}`"
		:aria-label="ariaLabel">
		<slot v-if="$slots.iconPrepend" name="iconPrepend"></slot>
		<span v-if="$slots.default" ref="link" aria-hidden="true"><slot></slot></span>
		<slot v-if="$slots.iconAppend" name="iconAppend"></slot>
	</RouterLink>
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
		default: '',
	},
	// width 100%
	block: {
		type: Boolean,
		default: false,
	},
	// 텍스트읽어주기
	read: {
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

const customClass = computed(() => {
	return props.variant === 'text' ? '' : 'btn__basic'
})

const link = ref()
const ariaLabel = ref(null)

onMounted(() => {
	if (props.read) ariaLabel.value = link.value.textContent.replace(/\s/gi, '')
})
</script>

<style lang="scss" scoped></style>
