<template>
	<main id="content">
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
	</main>
</template>

<style lang="scss" scoped>
main {
	padding: 30px 20px;
}
</style>
