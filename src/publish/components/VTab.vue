<template>
	<div role="tablist" :aria-labelledby="id" :class="['tabs_sample', { expand: tabExpand }]">
		<VBtn
			v-for="(tab, i) in tabList"
			:key="i"
			role="tab"
			:id="`${id}-${i}`"
			:aria-selected="activeTabs === i"
			:title="activeTabs === i ? '선택됨' : null"
			:aria-controls="`${id}-tabpanel-${i}`"
			:tabindex="activeTabs === i ? 0 : -1"
			:disabled="tab.disabled"
			@click="tabClick(i, tab)">
			{{ tab.label }}
		</VBtn>
	</div>
	<!--
        ** 필수 **
        tab button의 aira-controls와 content에 id 연결
        tab button의 id와 content영역에 aria-labelledby 연결
    -->
	<div class="tabs__panel" :data-panel="activeTabs">
		<template v-for="(panel, idx) in tabList" :key="`panel_${idx}`">
			<div :id="`${id}-tabpanel-${idx}`" role="tabpanel" :aria-labelledby="`${id}-${idx}`">
				<slot :name="`tabpanel-${idx}`"></slot>
			</div>
		</template>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import VBtn from '@/publish/components/VButton.vue'

const props = defineProps({
	modelValue: {
		type: Number,
		default: 0,
	},
	tabList: {
		type: Array,
		default: null,
		require: true,
	},
	id: {
		type: String,
		default: '',
	},
})

const emits = defineEmits(['update:modelValue', 'click'])

const activeTabs = computed({
	get() {
		return props.modelValue
	},
	set(tab) {
		emits('update:modelValue', tab)
	},
})
const tabExpand = ref(false)

const tabClick = (idx, tab) => {
	activeTabs.value = idx
	emits('click', idx, tab)
}
</script>
