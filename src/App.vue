<template>
	<header id="header" v-if="$router.currentRoute.value.meta.title">
		<!-- <RouterLink to="/" aria-label="뒤로가기" class="btn_goback"
			><VIcon :width="32" :height="32" :bgName="'arrow_back'"
		/></RouterLink> -->
		<h1>
			{{ $router.currentRoute.value.meta.title }}
		</h1>
	</header>
	<RouterView />
</template>

<script setup>
import '@/assets/scss/style.scss'
</script>
