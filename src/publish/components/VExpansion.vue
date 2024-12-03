<template>
	<div class="expansion__panel" :class="transition === false ? 'no_anim' : ''">
		<div
			:id="`${id}-title`"
			class="expansion__title"
			:aria-expanded="expanded"
			:aria-controls="`${id}-content`">
			<slot name="title"></slot>
		</div>
		<div
			class="expansion__container"
			role="region"
			:aria-labelledby="`${id}-title`"
			:aria-hidden="!expanded"
			:id="`${id}-content`">
			<div class="expansion__content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps({
	expanded: {
		type: Boolean,
		difault: false,
	},
	id: {
		type: String,
		difault: '',
		required: true,
	},
	transition: {
		type: Boolean,
		default: true,
	},
})
</script>
