<template>
	<div
		class="textfield__inpbox"
		:class="`${focusClass} ${typingClass} ${props.disabled === true ? 'disabled' : ''}  ${props.readonly === true ? 'readonly' : ''}`"
		:style="`width: ${props.block === true ? '100%' : ''}`">
		<div class="field_input">
			<textarea
				cols="30"
				rows="10"
				ref="input"
				:id="props.id"
				:name="props.name"
				:title="props.title"
				:readonly="props.readonly"
				:disabled="props.disabled"
				:maxlength="props.maxLength"
				:aria-labelledby="props.ariaLabelledby"
				@input="onChange($event)"
				@focus="emit('focus')"
				@blur="emit('blur')"></textarea>
			<label :for="props.id" v-if="props.placeholder">{{ props.placeholder }}</label>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const input = ref()
const focusClass = ref('')
const typingClass = ref('')

const onChange = e => {
	emit('update:modelValue', e.target.value)
	if (e.target.value) {
		typingClass.value = 'typing'
	} else {
		typingClass.value = ''
	}
}

onMounted(() => {
	if (input.value.value) {
		typingClass.value = 'typing'
	}
})

const props = defineProps({
	// id
	id: {
		type: String,
		default: '',
	},
	// name
	name: {
		type: String,
		default: null,
	},
	// type
	type: {
		type: String,
		default: 'text',
	},
	// placeholder
	placeholder: {
		type: String,
		default: '',
	},
	// width 100%
	block: {
		type: Boolean,
		default: false,
	},
	// 단독사용
	title: {
		type: String,
		default: null,
	},
	// aria-labelledby
	ariaLabelledby: {
		type: String,
		default: null,
	},
	// readonly
	readonly: {
		type: Boolean,
		default: false,
	},
	// disabled
	disabled: {
		type: Boolean,
		default: false,
	},
	// disabled
	maxLength: {
		type: Number,
		default: null,
	},
	modelValue: {},
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])
</script>
