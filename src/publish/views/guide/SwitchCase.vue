<template>
	<strong>기본 스위치</strong><br />
	<VSwitch :checked="checked" @click="checked = !checked" />
</template>

<script setup>
import VSwitch from '@/publish/components/VSwitch.vue'
import { ref } from 'vue'
const checked = ref(false)
</script>
