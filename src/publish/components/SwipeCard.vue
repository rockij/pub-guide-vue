<template>
	<div>
		<VBtn class="btn_prev" @click="onSwipeBtn('left')" aria-label="이전" />
		<VBtn class="btn_next" @click="onSwipeBtn('right')" aria-label="다음" />
		<div ref="cardSwipe" class="card_wrap">
			<SwipeCardInner
				v-for="card in cardCnt"
				:key="card"
				@end:left="cardSwipeLeftEnd(card)"
				@end:right="cardSwipeRightEnd(card)"
				@end:down="cardSwipeDownEnd(card)"
				:aria-hidden="cardCnt === card ? null : true"
				ref="cardSwipeRef">
				<slot :name="`cardItem${card - 1}`"></slot>
			</SwipeCardInner>
		</div>
	</div>
</template>

<script setup>
import VBtn from '@/publish/components/VButton.vue'
import SwipeCardInner from '@/publish/components/SwipeCardInner.vue'
import { ref } from 'vue'

const cardAllHidden = card => {
	let cardsLast
	const cards = cardSwipe.value.querySelectorAll('article')
	for (card of cards) {
		card.setAttribute('aria-hidden', true)
		cardsLast = card
	}
	cardsLast.removeAttribute('aria-hidden')
}

const cardSwipe = ref()
const cardSwipeRef = ref([])
const cardIndex = ref(1)

const cardSwipeLeftEnd = card => {
	console.log('cardSwipeLeftEnd', card, cardSwipeRef.value[card - 1].container)
	cardSwipe.value.prepend(cardSwipeRef.value[card - 1].container)
	document.querySelector('.swipe_left')?.classList.remove('swipe_left')
	emits('swipe', card)
	cardIndex.value = card
	emits('swipe:left')
	cardAllHidden(card)
}

const cardSwipeRightEnd = card => {
	console.log('cardSwipeRightEnd', card)
	cardSwipe.value.prepend(cardSwipeRef.value[card - 1].container)
	document.querySelector('.swipe_right')?.classList.remove('swipe_right')
	emits('swipe', card)
	cardIndex.value = card
	emits('swipe:right')
	cardAllHidden(card)
}

const cardSwipeDownEnd = card => {
	console.log('cardSwipeDownEnd', card)
	cardSwipe.value.classList.add('motion_close', 'swipe_down')
	emits('swipe:down')
}

const onSwipeDownCheck = () => {
	cardSwipe.value.classList.remove('motion_close')
	setTimeout(() => {
		cardSwipe.value.classList.remove('swipe_down')
	}, 300)
}

const emits = defineEmits(['swipe', 'swipe:down', 'swipe:right', 'swipe:left'])
const props = defineProps({
	lists: {
		type: Array,
		default: () => [],
	},
	cardCnt: {
		type: Number,
		default: 0,
		requrer: true,
	},
})

const onSwipeBtn = type => {
	const cardIdx = cardIndex.value === 1 ? props.cardCnt : cardIndex.value - 1
	console.log('cardIdx', cardIdx)

	switch (type) {
		case 'left':
			cardSwipeRef.value[cardIdx - 1].onSwipeLeft()
			break
		case 'right':
			cardSwipeRef.value[cardIdx - 1].onSwipeRight()
			break
	}
}

defineExpose({ onSwipeDownCheck })
</script>
