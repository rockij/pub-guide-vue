<template>
	<Teleport to="body">
		<Transition @after-enter="onAfterEnter">
			<div
				v-if="props.toast === true"
				:id="props.id"
				role="dialog"
				aria-modal="true"
				class="toast__wrap">
				<div class="toast__content">
					<slot></slot>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'

const emit = defineEmits(['close'])
const props = defineProps({
	toast: {
		type: Boolean,
		default: false,
	},
	id: {
		type: String,
		default: null,
		required: true,
	},
	timer: {
		type: Number,
		default: 2,
	},
	afterLink: {
		type: Boolean,
		default: false,
	},
	linkUrl: {
		type: String,
		default: null,
	},
})
const timer = ref(props.timer * 1000)
function onAfterEnter() {
	setTimeout(() => {
		emit('close')
	}, timer.value)
	setTimeout(() => {
		if (props.linkUrl) {
			router.push(props.linkUrl)
		}
	}, timer.value + 250)
}
</script>
