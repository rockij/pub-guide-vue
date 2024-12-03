<template>
	<Teleport to="body">
		<Transition>
			<div
				v-if="props.dialog === true"
				:id="props.id"
				role="dialog"
				aria-modal="true"
				class="dialog__wrap"
				:class="dialogType">
				<div
					v-if="props.dim"
					role="button"
					aria-hidden="true"
					title="팝업닫기"
					class="dialog__back"
					:class="!props.dimTouch ? 'noevent' : ''"
					@click="$emit('close')"></div>
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
						@click="$emit('close')"></button>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
import { computed, onUpdated } from 'vue'

defineEmits(['close'])

const props = defineProps({
	dialog: {
		type: Boolean,
		default: false,
	},
	id: {
		type: String,
		default: null,
		required: true,
	},
	// dialog type
	type: {
		type: String,
		default: null,
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

const dialogType = computed(() => {
	if (props.type === 'alert') {
		return 'dialog__alert'
	} else if (props.type === 'center') {
		return 'dialog__center'
	} else if (props.type === 'bottom') {
		return 'dialog__bottom'
	} else if (props.type === 'full') {
		return 'dialog__full'
	} else {
		return false
	}
})

onUpdated(() => {
	if (props.dialog === true) {
		document.querySelector('body').classList.add('isHidden')
	} else {
		document.querySelector('body').classList.remove('isHidden')
	}
})
</script>
