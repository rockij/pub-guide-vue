<template>
	<main id="content">
		<ScrollObserver class="item">1</ScrollObserver>
		<ScrollObserver class="item">2</ScrollObserver>
		<ScrollObserver class="item">3</ScrollObserver>
	</main>
</template>

<script setup>
import ScrollObserver from '@/publish/components/ScrollObserver.vue'
</script>

<style lang="scss" scoped>
main {
	padding: 30px 20px;
}
.item {
	height: 500px;
	border: 1px solid;
	&:not(:first-child) {
		margin-top: 100px;
	}
}
</style>
