<template>
	<span role="radio" :aria-checked="props.checked" class="radio__draw_ani"
		><i class="o"></i
		><span class="text" v-if="$slots.default"><slot name="default"></slot></span
	></span>
</template>

<script setup>
const props = defineProps({
	checked: {
		type: Boolean,
		default: false,
	},
})
</script>
