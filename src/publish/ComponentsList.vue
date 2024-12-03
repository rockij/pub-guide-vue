<template>
	<main id="content">
		<VBtn @click="goPath('/ButtonCase')" :color="'primary'" :height="'sm'" :variant="'back'"
			>버튼케이스보기</VBtn
		>

		<br /><br />

		<VLink to="/DialogCase" :color="'primary'" :height="'sm'" :variant="'back'">dialog</VLink>

		<VLink to="/ExpansionCase" :color="'primary'" :height="'sm'" :variant="'back'"
			>expansion panels</VLink
		>

		<br /><br />

		<VBtn :color="'primary'" :height="'sm'" :variant="'back'" @click="toast = true">toast</VBtn>
		<VToast :toast="toast" :id="'toast1'" @close="toast = false" :linkUrl="'/'">
			토스트메시지 입니다
		</VToast>

		<Tippy
			content="툴팁내용입니다"
			animation="fade"
			trigger="click"
			:hideOnClick="true"
			placement="bottom">
			<VBtn :color="'primary'" :height="'sm'" :variant="'back'">tooltip</VBtn>
		</Tippy>

		<Tippy animation="fade" trigger="click" :hideOnClick="true" placement="bottom">
			<VBtn :color="'primary'" :height="'sm'" :variant="'back'">tooltip (templet)</VBtn>
			<template #content> 툴팁내용입니다 </template>
		</Tippy>

		<br /><br />

		<VLink to="/TextfieldCase" :color="'primary'" :height="'sm'" :variant="'back'"
			>textfields</VLink
		>

		<VLink to="/ImageLoading" :color="'primary'" :height="'sm'" :variant="'back'"
			>image loading</VLink
		>

		<br /><br />

		<VLink to="/SlideCase" :color="'primary'" :height="'sm'" :variant="'back'"
			>slide vue3-carousel</VLink
		>
		<VLink to="/SlideCase2" :color="'primary'" :height="'sm'" :variant="'back'"
			>slide egjs-flicking</VLink
		>

		<br /><br />

		<VLink to="/ScrollSectionView" :color="'primary'" :height="'sm'" :variant="'back'"
			>scroll section observer</VLink
		>

		<br /><br />

		텍스트 카운팅:
		<TextCounter :startAmount="0" :endAmount="2000" :duration="3" :autoinit="true" />

		<br /><br />

		<NavSticky />

		<br />

		<strong>싱글 체크박스</strong><br />
		<div class="checkbox__group">
			<VCheckbox :checked="checked" @click="checked = !checked"
				>약관 내용에 동의합니다.</VCheckbox
			>
			<VBtn
				:color="'cancel'"
				:height="'sm'"
				:variant="'back'"
				class="btn_view"
				title="약관 제목 상세보기"
				>&gt;</VBtn
			>
		</div>

		<br />

		<strong id="group_chk_lb01">체크박스 그룹</strong>
		<ul role="group" aria-labelledby="group_chk_lb01">
			<li role="none" v-for="(item, i) in checkedList" :key="i">
				<VCheckbox :checked="item.value" @click="item.value = !item.value">
					{{ item.text }}
				</VCheckbox>
			</li>
		</ul>

		<br />

		<strong id="group_radio_lb01">라디오 그룹</strong>
		<ul role="radiogroup" aria-labelledby="group_radio_lb01">
			<li role="none" v-for="(item, i) in radioList" :key="i">
				<VRadio :checked="radioCheck === i" @click="radioCheck = i">{{ item.text }}</VRadio>
			</li>
		</ul>

		<br />

		<strong>토글 스위치</strong><br />
		<span class="switch__spring">
			<input id="switch" type="checkbox" />
			<label for="switch">스위치연결</label>
		</span>

		<br /><br />

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

		<br /><br />

		<strong>네이티브 가로 스크롤</strong><br />
		<div class="test_media_scroll">
			<span v-for="slide in 30" :key="slide">{{ slide }}</span>
		</div>

		<br />

		<strong>말줄임</strong><br />
		<p class="test_text_overflow1">
			말줄임한줄입니다말줄임한줄입니다말줄임한줄입니다말줄임한줄입니다
		</p>
		<div class="test_text_overflow1_wrap">
			<p class="test_text_overflow1">
				우측에아이콘이 있는 핝눌 말줄임 우측에아이콘이 있는 핝눌 말줄임
			</p>
			<span class="option_el">아이콘</span>
		</div>
		<p class="test_text_overflow2">
			두줄말줄임입니다.두줄말줄임입니다.두줄말줄임입니다.두줄말줄임입니다.두줄말줄임입니다.
			두줄말줄임입니다. 두줄말줄임입니다.
		</p>

		<br />

		<strong>무한롤링</strong><br />
		<div class="marquee mt-12" style="--size: 10.5rem; --gap: 1rem; --duration: 15s">
			<div class="marquee-group">
				<img
					v-for="item in 3"
					:key="item"
					:src="`/src/assets/images/temp/dummy1.jpg`"
					alt="" />
				<img
					v-for="item in 3"
					:key="item"
					:src="`/src/assets/images/temp/dummy1.jpg`"
					alt="" />
			</div>
			<div aria-hidden="true" class="marquee-group">
				<img
					v-for="item in 3"
					:key="item"
					:src="`/src/assets/images/temp/dummy1.jpg`"
					alt="" />
				<img
					v-for="item in 3"
					:key="item"
					:src="`/src/assets/images/temp/dummy1.jpg`"
					alt="" />
			</div>
		</div>

		<br />

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
	</main>
</template>

<script setup>
import router from '@/router'
import TextCounter from 'vue3-autocounter'
import VBtn from '@/publish/components/VButton.vue'
import VLink from '@/publish/components/VLink.vue'
import VCheckbox from '@/publish/components/VCheckbox.vue'
import VRadio from '@/publish/components/VRadio.vue'
import VToast from '@/publish/components/VToast.vue'
import NavSticky from '@/publish/components/NavSticky.vue'
import SelectDialog from '@/publish/components/SelectDialog.vue'
import { ref } from 'vue'
import { Tippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
const toast = ref(false)
const checked = ref(true)
const checkedList = ref([
	{
		text: '사과',
		value: false,
	},
	{
		text: '오렌지',
		value: false,
	},
	{
		text: '체리',
		value: false,
	},
])
const radioCheck = ref()
const radioList = ref([
	{
		text: '좋아요',
	},
	{
		text: '싫어요',
	},
	{
		text: '보통',
	},
])
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
function goPath(val) {
	router.push(val)
}
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

<style lang="scss" scoped>
main {
	padding: 30px 20px;
}
.btn__basic {
	margin-right: 10px;
}
</style>
