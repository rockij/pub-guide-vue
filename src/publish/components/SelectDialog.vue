<template>
	<VDialog :type="'bottom'" :dialog="props.dialog" :id="props.id" @close="emit('close')">
		<template #header
			><h2>{{ props.title }}</h2></template
		>
		<template #footer>
			<VBtn
				:color="'primary'"
				:height="'m'"
				:variant="'back'"
				:block="true"
				@click="emit('close')"
				>확인</VBtn
			>
		</template>
		<div v-for="(item, i) in lists" :key="i">
			<VBtn :variant="'text'" @click="onClicked(item)"><span v-html="item.text"></span></VBtn>
		</div>
	</VDialog>
</template>

<script setup>
import VDialog from '@/publish/components/VDialog.vue'
import VBtn from '@/publish/components/VButton.vue'
const props = defineProps({
	lists: {},
	title: {
		type: String,
		default: '',
	},
	dialog: {
		type: Boolean,
		default: false,
	},
	id: {
		type: String,
		default: '',
	},
})
const emit = defineEmits(['close', 'update'])
function onClicked(btn) {
	emit('update', btn)
}
</script>
