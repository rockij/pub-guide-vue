<template>
	<div class="pub_guide_board">
		<aside class="pub_guide_snb">
			<ul>
				<li v-for="(item, i) in snbItem" :key="i">
					<VBtn
						height="m"
						:class="{ active: activeIndex === i }"
						@click="changeCurrentComp(item.comp, i)"
						>{{ item.label }}</VBtn
					>
				</li>
				<li>
					<VBtn height="m" @click="toast = true">toast</VBtn>
				</li>
			</ul>
		</aside>
		<main class="pub_guide_content">
			<component :is="currentComp" />

			<VToast :toast="toast" :id="'toast1'" @close="toast = false" :linkUrl="'/'">
				토스트메시지 입니다
			</VToast>
		</main>
	</div>
</template>

<script setup>
// import router from '@/router'
import VBtn from '@/publish/components/VButton.vue'
import VToast from '@/publish/components/VToast.vue'
import NavSticky from '@/publish/components/NavSticky.vue'
import GuideDoc from '@/publish/views/guide/GuideDoc.vue'
import IndexView from '@/publish/IndexView.vue'
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
import RangeCase from '@/publish/views/guide/RangeCase.vue'
import SwitchCase from '@/publish/views/guide/SwitchCase.vue'
import ImageCase from '@/publish/views/guide/ImageCase.vue'
import ScrollSectionView from '@/publish/views/guide/ScrollSectionView.vue'
import { ref } from 'vue'
const toast = ref(false)

// function goPath(val) {
// 	router.push(val)
// }

const currentComp = ref(GuideDoc)
const changeCurrentComp = (comp, index) => {
	currentComp.value = comp
	activeIndex.value = index
}

const activeIndex = ref(0)
const snbItem = [
	{ label: '작업가이드', comp: GuideDoc },
	{ label: '현황판', comp: IndexView },
	{ label: '텍스트', comp: TextCase },
	{ label: '버튼', comp: ButtonCase },
	{ label: '팝업', comp: DialogCase },
	{ label: '확장패널', comp: ExpansionCase },
	{ label: '입력필드', comp: TextfieldCase },
	{ label: '체크박스', comp: CheckboxCase },
	{ label: '라디오', comp: RadioCase },
	{ label: '스위치', comp: SwitchCase },
	{ label: 'range', comp: RangeCase },
	{ label: '셀렉트박스', comp: SelectCase },
	{ label: '탭', comp: TabsCase },
	{ label: '툴팁', comp: TooltipCase },
	{ label: 'slide', comp: SlideCase },
	{ label: '이미지로딩', comp: ImageCase },
	{ label: '상단고정', comp: NavSticky },
	{ label: '스크롤 중 영역실행', comp: ScrollSectionView },
]
</script>
