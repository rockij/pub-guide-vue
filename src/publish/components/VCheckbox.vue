<template>
	<span role="checkbox" :aria-checked="props.checked" class="checkbox__draw_ani"
		><span class="v"><i></i></span
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
