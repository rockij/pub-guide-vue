<template>
	<h2>Navigation & Controls</h2>
	<Carousel>
		<Slide v-for="slide in 10" :key="slide">
			<div class="carousel__item">{{ slide }}</div>
		</Slide>
		<template #addons>
			<Navigation />
			<Pagination />
		</template>
	</Carousel>

	<h2>autoplay</h2>
	<VBtn :color="'primary'" :height="'sm'" :variant="'back'" @click="autoPause">정지</VBtn>
	<VBtn :color="'primary'" :height="'sm'" :variant="'back'" @click="autoPlay">시작</VBtn>
	<Carousel :autoplay="autoplay" :wrap-around="true">
		<Slide v-for="slide in 10" :key="slide">
			<div class="carousel__item">{{ slide }}</div>
		</Slide>
	</Carousel>

	<h2>wrap around</h2>
	<Carousel :items-to-show="2.5" :wrap-around="true">
		<Slide v-for="slide in 10" :key="slide">
			<div class="carousel__item">{{ slide }}</div>
		</Slide>
		<template #addons>
			<Navigation />
		</template>
	</Carousel>

	<br />

	<strong>네이티브 가로 스크롤</strong><br />
	<div class="test_media_scroll">
		<span v-for="slide in 30" :key="slide">{{ slide }}</span>
	</div>

	<br /><br />

	<strong>터치 카드 스와이프(모바일 전용)</strong><br />
	<SwipeCard
		ref="swipeCard"
		:cardCnt="myCardList.length"
		:class="[
			'carousel__card_swipe carousel__card_info',
			myCardList.length <= 1 ? 'type_one' : null,
		]"
		><template v-for="(card, i) in myCardList" :key="i" #[`cardItem${i}`]
			><img
				width="400"
				height="300"
				alt="이미지테스트1"
				lazy="error"
				v-lazy="{
					src: card.name,
				}" /></template
	></SwipeCard>
</template>

<script setup>
import { ref } from 'vue'
import VBtn from '@/publish/components/VButton.vue'
import SwipeCard from '@/publish/components/SwipeCard.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const autoplay = ref(2000)
const autoPause = () => {
	autoplay.value = 0
}
const autoPlay = () => {
	autoplay.value = 2000
}
const myCardList = ref([
	{ name: 'src/assets/images/temp/bn_320x252.png' },
	{ name: 'src/assets/images/temp/dummy1.jpg' },
	{ name: 'src/assets/images/temp/bn_320x252.png' },
])
</script>

<style lang="scss" scoped>
main {
	padding: 30px 20px 100px;
}
h2 {
	margin-bottom: 10px;
	font-weight: 600;
	&:not(:first-child) {
		margin-top: 30px;
	}
}
</style>
