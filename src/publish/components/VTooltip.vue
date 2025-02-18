<template>
	<span
		ref="tippyWrap"
		v-if="delayShow"
		:class="['tippy-allwrap', buttonConfig ? '' : 'onlyBtn']">
		<Tippy
			ref="tippyRef"
			:allowHTML="true"
			:content="content"
			:animation="animation"
			:trigger="trigger"
			:hideOnClick="hideOnClick"
			:interactive="interactive"
			:appendTo="appendTo"
			:showOnCreate="isShow"
			:placement="placement"
			@clickOutside="onClickOutside"
			@create="onCreate">
			<VBtn v-if="buttonConfig" @click="buttonConfig.callback">
				<template v-if="buttonConfig.label">{{ buttonConfig.label }}</template>
				<template v-else><slot name="default"></slot></template>
			</VBtn>
			<VBtn aria-label="도움말 보기" v-if="iconConfig" @click="onShow">👀</VBtn>
			<template #content v-if="$slots.contents">
				<slot name="contents"></slot>
				<VBtn v-if="!buttonConfig" aria-label="도움말 보기" @click="onClose">👀</VBtn>
			</template>
		</Tippy>
	</span>
</template>

<script setup>
import { Tippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import VBtn from '@/publish/components/VButton.vue'

import { ref, onMounted } from 'vue'
const tippyRef = ref()
const props = defineProps({
	content: {
		type: String,
		default: '',
	},
	animation: {
		type: String,
		default: 'fade',
	},
	trigger: {
		type: String,
		default: 'click',
	},
	placement: {
		type: String,
		default: 'bottom',
	},
	hideOnClick: {
		type: Boolean,
		default: true,
	},
	buttonConfig: {
		type: Object,
		default: () => {},
	},
	iconConfig: {
		type: Object,
		default: () => {},
	},
	isShow: {
		type: Boolean,
		default: true,
	},
	interactive: {
		type: Boolean,
		default: false,
	},
	appendTo: {
		type: String,
		default: 'parent',
	},
})

const delayShow = ref(false)
onMounted(() => {
	setTimeout(() => {
		delayShow.value = true
	})
})

const emits = defineEmits(['clickOutside'])
const onClickOutside = instance => {
	if (props.hideOnClick) instance.hide()
	emits('clickOutside', instance)
}

const onShow = () => {
	console.log('툴팁보기')
}

const onClose = () => {
	console.log('툴팁닫기')
}
</script>
