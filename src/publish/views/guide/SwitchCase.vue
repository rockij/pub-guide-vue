<template>
	<strong>기본 스위치</strong><br />
	<VSwitch :checked="checked" title="swtich" v-model:check="switch1" />
	<br />
	switch1: {{ switch1 }}

	<br /><br />

	<strong>disabled</strong><br />
	<VSwitch :checked="checked" title="swtich" v-model:check="switch2" disabled />
</template>

<script setup>
import VSwitch from '@/publish/components/VSwitch.vue'
import { ref } from 'vue'
const switch1 = ref(false)
const switch2 = ref(false)
</script>
