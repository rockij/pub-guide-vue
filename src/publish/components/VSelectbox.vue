<template>
	<VBtn
		v-bind="$attrs"
		:id="buttonId"
		:block="block"
		:aria-controls="dialogId"
		:title="`${dialogTitle} 선택`"
		@click="openSelectBox"
		>{{ selectName }}</VBtn
	>
	<VDialog
		ref="dialogRef"
		type="bottom"
		:id="dialogId"
		@update="closeDialog"
		@afterEnter="openSelectAfter"
		@afterLeave="closeSelectAfter">
		<template #header><h2>타이틀</h2></template>
		<template #footer>
			<VBtn color="primary" height="m" variant="back" @click="closeDialog">확인</VBtn>
		</template>
		<ul>
			<li v-for="(item, i) in list" :key="i">
				<VBtn
					v-if="!multiple"
					variant="back"
					height="m"
					:class="item.selected ? 'selected' : ''"
					:title="item.selected ? '선택됨' : null"
					@click="selectSingle(item, i)"
					><span v-html="item.text"></span
				></VBtn>

				<VBtn
					v-else
					variant="back"
					height="m"
					:class="item.selected ? 'selected' : ''"
					:title="item.selected ? '선택됨' : null"
					@click="selectMultiple(i)"
					><span v-html="item.text"></span
				></VBtn>
			</li>
		</ul>
	</VDialog>
</template>

<script setup>
import VBtn from './VButton.vue'
import VDialog from './VDialog.vue'
import { ref, computed, watch } from 'vue'

const props = defineProps({
	buttonId: {
		type: String,
		default: '',
	},
	dialogId: {
		type: String,
		default: '',
	},
	block: {
		type: Boolean,
		default: true,
	},
	selectName: {
		type: String,
		default: '선택',
	},
	list: {
		type: Array,
		default: () => [],
	},
	multiple: {
		type: Boolean,
		default: false,
	},
	selectClass: {
		type: String,
		default: '',
	},
})

const emits = defineEmits([
	'update:selectName', // update : select 버튼명
	'update:list', // update : select dialog 컨텐츠 리스트
	'select', // select시 발생
	'selected', // select시 발생
	'close',
])

const dialogRef = ref()
const openSelectBox = () => dialogRef.value.show()
const openSelectAfter = () => {
	console.log('팝업 열림')
}
const closeSelectAfter = () => {
	console.log('팝업 닫힘')
}
const closeSelectBox = () => dialogRef.value.hide()

const selectBtnClass = ref(props.selectClass)
const list = computed({
	get() {
		return props.list
	},
	set(list) {
		emits('update:list', list)
	},
})

// list 중 선택된 값
const selectedList = computed(() => {
	return list.value.filter(item => item.selected)
})

// selectName v-model 바인딩
const selectName = computed({
	get() {
		return props.selectName
	},
	set(selectName) {
		emits('update:selectName', selectName)
	},
})

// select된 데이터 업데이트 하는 함수
const changeSelectedItem = _selectedItem => {
	// selectBtnClass 업데이트
	if (_selectedItem.default === true) {
		selectBtnClass.value = ''
	} else {
		selectBtnClass.value = 'active'
	}

	// selectName 업데이트
	if (_selectedItem.labelText) {
		selectName.value = _selectedItem.labelText
	} else {
		selectName.value = _selectedItem.text
	}
}

// list selected를 전부 false로 변경하는 함수
const unSelectAll = () => {
	const newList = [...list.value]

	// selected 값 토글처리
	newList.forEach((_, i) => {
		newList[i].selected = false
	})

	list.value = newList
}
defineExpose({ unSelectAll, changeSelectedItem })

// list가 변경되면 변경된 list 데이터에 따른 selected 데이터 셋
watch(
	() => list.value,
	() => {
		if (props.multiple === false) {
			for (let i = 0; i < list.value.length; i++) {
				if (list.value[i].selected === true) {
					changeSelectedItem(list.value[i])
				}
			}
		}
	},
)

// single select 핸들러
const selectSingle = (selectedItem, selectedIndex) => {
	const newList = [...list.value]
	// selected 값 토글처리
	newList.forEach((_, i) => {
		if (i === selectedIndex) {
			newList[i].selected = true
		} else {
			newList[i].selected = false
		}
	})
	changeSelectedItem(selectedItem)
	emits('select', selectedList.value)
	emits('selected', selectedList.value)
	list.value = newList
	closeDialog()
}

// multi select 핸들러
const selectMultiple = selectedIndex => {
	const newList = [...list.value]
	// selected 값 토글처리
	newList[selectedIndex].selected = !newList[selectedIndex].selected
	emits('select', selectedList.value)
	emits('selected', selectedList.value)
	list.value = newList
}

const closeDialog = () => {
	emits('close', selectedList.value)
	closeSelectBox()
}
</script>
