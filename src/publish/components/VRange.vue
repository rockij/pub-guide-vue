<template>
	<div v-bind="$attrs">
		<VBtn
			title="slider 감소"
			height="sm"
			variant="back"
			:disabled="dataIdx === 0 ? true : null"
			@click="decrease" />

		<div :aria-label="minValue">
			<div aria-hidden="true">
				<span v-if="min > 0" :style="`width: ${min}%`"></span>
				<VueSlider
					v-model="minValue"
					:tooltip="tooltip"
					:interval="interval"
					:min="min"
					:tooltipFormatter="tooltipText"
					:tooltipStyle="tooltipStyle"
					:dotStyle="adsorb"
					:marks="marks"
					:data="data" />
			</div>
			<div v-if="$slots.bottom" aria-hidden="true"><slot name="bottom"></slot></div>
		</div>
		<VBtn
			title="slider 증가"
			height="sm"
			variant="back"
			:disabled="dataIdx === data?.length - 1 ? true : null"
			@click="increase" />
	</div>
</template>

<script setup>
import VBtn from '@/publish/components/VButton.vue'
import VueSlider from 'vue-3-slider-component'
import { ref, computed, useAttrs, onMounted, watch } from 'vue'

const attrs = useAttrs()
const props = defineProps({
	min: {
		type: Number,
		default: 0,
	},
	modelValue: {
		type: [String, Number],
		default: 0,
	},
	interval: {
		type: Number,
		default: 1,
	},
	tooltip: {
		type: String,
		default: 'none',
	},
	tooltipText: {
		type: String,
		default: '',
	},
	adsorb: {
		type: Boolean,
		default: false,
	},
	marks: {
		type: Boolean,
		default: false,
	},
	data: {
		type: Array,
		default: null,
	},
	tooltipStyle: {
		type: Object,
		default: () => {},
	},
	dotStyle: {
		type: Object,
		default: () => {},
	},
})

const emits = defineEmits(['update:modelValue'])
const minValue = computed({
	get() {
		return props.modelValue
	},
	set(modelValue) {
		emits('update:modelValue', modelValue)
	},
})

const dataIdx = ref()
onMounted(() => {
	if (props.data) {
		props.data.forEach((item, i) => {
			if (item === props.modelValue) {
				dataIdx.value = i
			}
		})
	}
})

watch(
	() => minValue.value,
	() => {
		if (props.data) {
			props.data.forEach((dataEach, idx) => {
				if (dataEach === minValue.value) {
					dataIdx.value = idx
				}
			})
		}
	},
)

const decrease = () => {
	if (minValue.value > props.min) {
		minValue.value = minValue.value - props.interval
	} else if (props.data && dataIdx.value > 0) {
		minValue.value = props.data[dataIdx.value - 1]
		dataIdx.value--
	}
}

const increase = () => {
	if (minValue.value < 100) {
		minValue.value = minValue.value + props.interval
	} else if (props.data && dataIdx.value < props.data.length - 1) {
		minValue.value = props.data[dataIdx.value + 1]
		dataIdx.value++
	}
}
</script>
