<template>
  <div class="count">
    <h1>This is an count page</h1>

    <p>count is : {{ count }}</p>
    <p>double count is : {{ doubleCount }}</p>
    <div>
      <my-button size="large" label="+1" @click="increment" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import MyButton from '../components/TestButton.vue'

const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store
</script>

<style>
@media (min-width: 1024px) {
  .count {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .count-button {
    color: black;
  }
}
</style>
