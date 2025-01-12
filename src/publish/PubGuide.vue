<template>
	<aside class="snb">
		<ul>
			<li><VBtn height="m" @click="changeCurrentComp(GuideDoc)">작업가이드</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(TextCase)">텍스트</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(ButtonCase)">버튼</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(DialogCase)">팝업</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(ExpansionCase)">확장패널</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(TextfieldCase)">입력필드</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(CheckboxCase)">체크박스</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(RadioCase)">라디오</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(SwitchCase)">스위치</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(SelectCase)">셀렉트박스</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(TabsCase)">탭</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(TooltipCase)">툴팁</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(SlideCase)">slide</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(ImageCase)">이미지로딩</VBtn></li>
			<li><VBtn height="m" @click="changeCurrentComp(NavSticky)">상단고정</VBtn></li>
			<li>
				<VBtn height="m" @click="changeCurrentComp(ScrollSectionView)"
					>스크롤 중 영역실행</VBtn
				>
			</li>
			<li>
				<VBtn height="m" @click="toast = true">toast</VBtn>
			</li>
		</ul>
	</aside>
	<main id="content">
		<component :is="currentComp" />

		<VToast :toast="toast" :id="'toast1'" @close="toast = false" :linkUrl="'/'">
			토스트메시지 입니다
		</VToast>
	</main>
</template>

<script setup>
// import router from '@/router'
import VBtn from '@/publish/components/VButton.vue'
import VToast from '@/publish/components/VToast.vue'
import NavSticky from '@/publish/components/NavSticky.vue'
import GuideDoc from '@/publish/views/guide/GuideDoc.vue'
import ButtonCase from '@/publish/views/guide/ButtonCase.vue'
import TextCase from '@/publish/views/guide/TextCase.vue'
import DialogCase from '@/publish/views/guide/DialogCase.vue'
import ExpansionCase from '@/publish/views/guide/ExpansionCase.vue'
import TooltipCase from '@/publish/views/guide/TooltipCase.vue'
import TextfieldCase from '@/publish/views/guide/TextfieldCase.vue'
import CheckboxCase from '@/publish/views/guide/CheckboxCase.vue'
import RadioCase from '@/publish/views/guide/RadioCase.vue'
import SelectCase from '@/publish/views/guide/SelectCase.vue'
import SlideCase from '@/publish/views/guide/SlideCase.vue'
import TabsCase from '@/publish/views/guide/TabsCase.vue'
import SwitchCase from '@/publish/views/guide/SwitchCase.vue'
import ImageCase from '@/publish/views/guide/ImageCase.vue'
import { ref } from 'vue'
const toast = ref(false)

// function goPath(val) {
// 	router.push(val)
// }

const currentComp = ref(GuideDoc)
const changeCurrentComp = comp => (currentComp.value = comp)
</script>

<style lang="scss" scoped>
main {
	padding: 30px 20px;
}
.btn__basic {
	margin-right: 10px;
}
</style>
