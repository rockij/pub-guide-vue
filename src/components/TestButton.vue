<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ buttonProps.label }}
  </button>
</template>

<script setup>
import '@/assets/style/button.css'
import { computed } from 'vue'

// props
const buttonProps = defineProps({
  label: {
    type: String,
    required: true
  },
  primary: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1
    }
  },
  backgroundColor: {
    type: String
  }
})

//emits
const buttonEmits = defineEmits(['click'])

const onClick = (event) => {
  console.log('버튼 클릭', event)

  buttonEmits('click', event)
}

// 변수 선언
const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': buttonProps.primary,
  'storybook-button--secondary': !buttonProps.primary,
  [`storybook-button--${buttonProps.size || 'medium'}`]: true
}))

const style = computed(() => ({
  backgroundColor: buttonProps.backgroundColor
}))
</script>
