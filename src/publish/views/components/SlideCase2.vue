<template>
	<main id="content">
		<h3>Navigation & Controls</h3>
		<Flicking :options="{ circular: true }" :plugins="plugins">
			<div class="card-panel">1</div>
			<div class="card-panel">2</div>
			<div class="card-panel">3</div>
			<template #viewport>
				<span class="flicking-arrow-prev is-circle"></span>
				<span class="flicking-arrow-next is-circle"></span>
				<div class="flicking-pagination"></div>
			</template>
		</Flicking>

		<h3>Autoplay</h3>
		<Flicking :options="{ circular: true }" :plugins="plugins2">
			<div class="card-panel">1</div>
			<div class="card-panel">2</div>
			<div class="card-panel">3</div>
		</Flicking>
	</main>
</template>

<script setup>
import { ref } from 'vue'
import VBtn from '@/publish/components/VButton.vue'
import Flicking from '@egjs/vue3-flicking'
import { Arrow, Pagination, AutoPlay } from '@egjs/flicking-plugins'
import '@egjs/vue3-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/flicking-plugins/dist/pagination.css'

const plugins = ref([new Arrow(), new Pagination({ type: 'bullet' })])

const plugins2 = ref([new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false })])
</script>

<style lang="scss" scoped>
main {
	padding: 30px 20px 100px;
}
h2 {
	margin-bottom: 10px;
	font-size: 18px;
	font-weight: 600;
	border-bottom: 1px solid currentColor;
	&:not(:first-child) {
		margin-top: 30px;
	}
}
h3 {
	margin-bottom: 10px;
	&:not(:first-child) {
		margin-top: 30px;
	}
}
.flicking-camera {
	display: flex;
	flex-direction: row;
	height: 100%;
	position: relative;
	width: 100%;
	will-change: transform;
	z-index: 1;
}
.card-panel {
	align-items: flex-end;
	border-radius: 5px;
	box-sizing: border-box;
	display: flex;
	height: 200px;
	justify-content: flex-start;
	margin-bottom: 10px;
	margin-right: 10px;
	padding: 30px 20px;
	position: relative;
	width: 50%;
	background-color: #fff;
	border-radius: 0.25rem;
	color: #4a4a4a;
	max-width: 100%;
	align-items: flex-start;
	border: 2px solid rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: flex-end;
}
</style>
