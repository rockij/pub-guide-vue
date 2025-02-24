<template>
	<v-range v-model="range1"></v-range>
	{{ range1 }}

	<br /><br />

	<v-range v-model="range2" :min="20" :tooltip="'none'"></v-range>
	{{ range2 }}

	<br /><br />

	<v-range v-model="range3" :interval="10" :tooltip="'none'"></v-range>
	{{ range3 }}
</template>

<script setup>
import VRange from '@/publish/components/VRange.vue'
import { ref } from 'vue'

const range1 = ref(20)
const range2 = ref(60)
const range3 = ref(0)
</script>
