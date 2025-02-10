<template>
	<span
		role="button"
		:title="title"
		:aria-checked="checked"
		:aria-disabled="disabled"
		class="switch__spring"
		@click="onClick">
		<span class="ball"></span>
		<slot name="default"></slot>
	</span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	check: {
		type: Boolean,
		default: false,
	},
	title: {
		type: String,
		default: null,
	},
	disabled: {
		type: Boolean,
		default: null,
	},
})

const emits = defineEmits(['update:check'])
const checked = computed({
	get() {
		return props.check
	},
	set(check) {
		emits('update:check', check)
	},
})
const onClick = () => {
	const newVal = !checked.value
	checked.value = newVal
}
</script>
