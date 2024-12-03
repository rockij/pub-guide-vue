<template>
	<main id="content">
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
	</main>
</template>

<script setup>
import { ref } from 'vue'
import VBtn from '@/publish/components/VButton.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const autoplay = ref(2000)
const autoPause = () => {
	autoplay.value = 0
}
const autoPlay = () => {
	autoplay.value = 2000
}
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
