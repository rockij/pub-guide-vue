<template>
	<strong>tabs</strong><br />
	<VTab v-model="selectTab" :tabList="tabList" id="tab" @click="onClickEvent">
		<template #tabpanel-0>tab content1</template>
		<template #tabpanel-1>tab content2</template>
		<template #tabpanel-2>tab content3</template>
	</VTab>

	<VBtn color="primary" height="sm" variant="back" @click="changeTab(1)">탭이동</VBtn>
</template>

<script setup>
import { ref } from 'vue'
import VTab from '@/publish/components/VTab.vue'
import VBtn from '@/publish/components/VButton.vue'

const selectTab = ref(0)
const tabList = ref([{ label: 'tab1' }, { label: 'tab2' }, { label: 'tab3' }])
const changeTab = tab => {
	selectTab.value = tab
}

const onClickEvent = id => {
	console.log('onClickEvent', id)
	console.log('onClickEvent', selectTab.value)
}
</script>
