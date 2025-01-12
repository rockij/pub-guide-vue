<template>
	<strong>tabs</strong><br />
	<div role="tablist" aria-labelledby="tablist-1" class="tabs_sample">
		<button
			v-for="(btn, i) in tabsBtn"
			:key="i"
			type="button"
			role="tab"
			:id="`tab-${i}`"
			:aria-selected="tabSelected === i"
			:aria-controls="`tabpanel-${i}`"
			:tabindex="tabSelected === i ? 0 : -1"
			@click="(tabSelected = i), (tabPanelActive = i)">
			{{ btn.text }}
		</button>
	</div>
	<!--
        ** 필수 **
        tab button의 aira-controls와 content에 id 연결
        tab button의 id와 content영역에 aria-labelledby 연결
    -->
	<div class="tabs__panel" :data-panel="tabPanelActive">
		<div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">tab content1</div>
		<div id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2">tab content2</div>
		<div id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3">tab content3</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const tabSelected = ref(0)
const tabsBtn = ref([
	{
		text: 'tab1',
	},
	{
		text: 'tab2',
	},
	{
		text: 'tab3',
	},
])
const tabPanelActive = ref(0)
</script>
