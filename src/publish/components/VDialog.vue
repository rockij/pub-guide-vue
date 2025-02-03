<template>
	<Teleport to="body">
		<Transition>
			<div
				v-if="isShow"
				:id="props.id"
				role="dialog"
				aria-modal="true"
				:class="['dialog__wrap', `dialog__${dialogType}`]">
				<VBtn
					v-if="props.dim"
					title="팝업닫기"
					class="dialog__back"
					:class="!props.dimTouch ? 'noevent' : ''"
					@click="$emit('update')"></VBtn>
				<div class="dialog__body">
					<header v-if="$slots.header" class="dialog__header">
						<slot name="header"></slot>
					</header>
					<div class="dialog__content">
						<slot></slot>
					</div>
					<div v-if="$slots.footer" class="dialog__footer">
						<slot name="footer"></slot>
					</div>
					<button
						v-if="props.closeBtn"
						type="button"
						title="팝업닫기"
						class="dialog__close"
						@click="$emit('update')"></button>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
import VBtn from '@/publish/components/VButton.vue'
import { ref, onUpdated } from 'vue'

defineEmits(['update'])

const props = defineProps({
	id: {
		type: String,
		default: null,
		required: true,
	},
	// dialog type
	type: {
		type: String,
		default: null,
		required: true,
	},
	// 상단 우측 x
	closeBtn: {
		type: Boolean,
		default: true,
	},
	// 배경 on / off
	dim: {
		type: Boolean,
		default: true,
	},
	// 배경영역 선택 여부
	dimTouch: {
		type: Boolean,
		default: true,
	},
})

const isShow = ref(false)
const show = () => {
	isShow.value = true
}
const hide = () => {
	isShow.value = false
}

const dialogType = ref(props.type)

onUpdated(() => {
	if (isShow.value === true) {
		document.querySelector('body').classList.add('isHidden')
	} else {
		document.querySelector('body').classList.remove('isHidden')
	}
})

defineExpose({ show, hide })
</script>
