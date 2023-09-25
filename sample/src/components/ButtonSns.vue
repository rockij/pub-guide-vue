<template>
  <ul class="btn-area-share" :class="areaClass">
    <li v-for="item in snsBtns" :key="item.id">
      <v-btn
        v-if="item.tel"
        variant="text"
        :title="item.title"
        :class="item.class"
        :href="`tel:${item.tel}`"
      />
      <v-btn
        v-else
        variant="text"
        :title="item.title"
        :class="item.class"
        @click="item.func"
      />
    </li>
  </ul>
</template>
<script>
  export default {
    props: ['areaClass', 'snsBtns']
  }
</script>
