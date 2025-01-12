<template>
	<strong>select</strong><br />
	<VBtn
		:variant="'text'"
		@click="selectDialog = true"
		aria-haspopup="dialog"
		:aria-controls="selectDialogId"
		>{{ selectName }}</VBtn
	>
	<SelectDialog
		:dialog="selectDialog"
		:lists="selectList"
		:title="selectTitle"
		:id="selectDialogId"
		@close="selectDialog = false"
		@update="selectChange" />
</template>

<script setup>
import SelectDialog from '@/publish/components/SelectDialog.vue'
import { ref } from 'vue'

const selectDialog = ref(false)
const selectDialogId = ref('selectId')
const selectName = ref('선택')
const selectTitle = ref('셀렉트이름')
const selectList = ref([
	{
		text: '리스트1',
	},
	{
		text: '리스트2',
	},
	{
		text: '리스트3',
	},
	{
		text: '리스트4',
	},
	{
		text: '리스트5',
	},
	{
		text: '리스트6',
	},
	{
		text: '리스트7',
	},
	{
		text: '리스트8',
	},
	{
		text: '리스트9',
	},
	{
		text: '리스트10',
	},
	{
		text: '리스트11',
	},
	{
		text: '리스트12',
	},
	{
		text: '리스트13',
	},
	{
		text: '리스트14',
	},
	{
		text: '리스트15',
	},
	{
		text: '리스트끝',
	},
])
function selectChange(val) {
	selectDialog.value = false
	return (selectName.value = val.text)
}
</script>
