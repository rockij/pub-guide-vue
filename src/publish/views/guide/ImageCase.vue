<template>
	<strong>무한롤링</strong><br />
	<div class="marquee mt-12" style="--size: 10.5rem; --gap: 1rem; --duration: 15s">
		<div class="marquee-group">
			<img v-for="item in 3" :key="item" :src="`/src/assets/images/temp/dummy1.jpg`" alt="" />
			<img v-for="item in 3" :key="item" :src="`/src/assets/images/temp/dummy1.jpg`" alt="" />
		</div>
		<div aria-hidden="true" class="marquee-group">
			<img v-for="item in 3" :key="item" :src="`/src/assets/images/temp/dummy1.jpg`" alt="" />
			<img v-for="item in 3" :key="item" :src="`/src/assets/images/temp/dummy1.jpg`" alt="" />
		</div>
	</div>

	<br /><br />

	<strong>이미지 로딩</strong><br />
	<img
		width="400"
		height="300"
		alt="이미지테스트1"
		lazy="error"
		v-lazy="{
			src: '/src/assets/images/temp/dummy1.jpg',
		}" />
	<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	<img
		width="400"
		height="300"
		alt="이미지테스트2"
		v-lazy="{
			src: '/src/assets/images/temp/dummy1.jpg',
		}" />
</template>

<style lang="scss" scoped>
main {
	padding: 30px 20px;
}
</style>
