<template>
	<div
		ref="inputBox"
		:class="`${focusClass} ${typingClass} ${props.disabled === true ? 'disabled' : ''}  ${props.readonly === true ? 'readonly' : ''}`"
		:style="`width: ${props.block === true ? '100%' : ''}`">
		<!-- element-left -->
		<div v-if="$slots.option2" class="field_option2">
			<slot name="option2"></slot>
		</div>
		<!-- //element-left -->
		<!-- input-field -->
		<div class="field_input">
			<input
				ref="input"
				:type="props.type"
				:id="props.id"
				:name="props.name"
				:aria-labelledby="props.ariaLabelledby"
				:title="props.title"
				:readonly="props.readonly"
				:disabled="props.disabled"
				:maxlength="props.maxLength"
				:value="props.modelValue"
				:autocomplete="props.autocomplete"
				:inputmode="props.inputmode"
				@input="onChange($event)"
				@focus="onFocus($event), emit('focus')"
				@blur="emit('blur')" />
			<label :for="props.id" v-if="props.placeholder">{{ props.placeholder }}</label>
			<!-- v-model.trim="value" -->
		</div>
		<!-- //input-field -->
		<!-- element-right -->
		<div class="field_option1">
			<template v-if="props.delete">
				<VBtn
					v-if="textDelete"
					:variant="'icon'"
					class="btn_event"
					@click="textDel"
					title="글삭제">
					<VIcon :width="24" :height="24" :bgName="'close2'" />
				</VBtn>
			</template>
			<slot name="option1"></slot>
		</div>
		<!-- //element-right -->
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import VIcon from '@/publish/components/VIcon.vue'
import VBtn from '@/publish/components/VButton.vue'

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
	// autocomplete
	autocomplete: {
		type: String,
		default: null,
	},
	// inputmode
	inputmode: {
		type: String,
		default: null,
	},
	// 지우기 button
	delete: {
		type: Boolean,
		default: true,
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

const inputBox = ref(null)
const input = ref()
const focusClass = ref('')
const typingClass = ref('')
const textDelete = ref(false)
const textDel = () => {
	emit('update:modelValue', '')
	input.value.focus()
	textDelete.value = false
}
const onChange = e => {
	emit('update:modelValue', e.target.value)
	if (e.target.value) {
		typingClass.value = 'typing'
		textDelete.value = true
	} else {
		typingClass.value = ''
		textDelete.value = false
	}
}
const onFocus = e => {
	if (e.target.value) {
		textDelete.value = true
	}
}
onClickOutside(inputBox, () => {
	textDelete.value = false
	if (input.value.value === '') {
		typingClass.value = ''
	}
})
onMounted(() => {
	if (input.value.value) {
		typingClass.value = 'typing'
	}
})
</script>
