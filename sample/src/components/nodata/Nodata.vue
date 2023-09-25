<template>
  <div class="no-data">
    <div :class="['icon', `size-${iconSize}`]" v-if="icon"></div>
    <div class="text">
      <slot>텍스트를 입력하세요</slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: Boolean,
        default: true
      },
      iconSize: {
        type: String,
        default: 'regular'
      }
    }
  }
</script>
