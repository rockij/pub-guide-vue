<template>
  <div class="contents">
    <!-- wrap-beer -->
    <div class="wrap-beer">
      <div ref="glass" class="glass">
        <div class="bottle_handle"></div>
        <div ref="beer" class="beer" :style="{ height: beerFill + '%' }"></div>
        <div class="bubble_1"></div>
        <div class="bubble_2"></div>
        <div class="bubble_3"></div>
        <div class="bubble_4"></div>
        <div class="bubble_5"></div>
        <div class="bubble_6"></div>
      </div>
      <div ref="head" class="head" :style="{ bottom: headPos + '%' }"></div>
    </div>
    <!-- //wrap-beer -->

    <div class="wrap-beer2" style="margin: 50px 0">
      <div class="glass2" ref="glass2" style="margin: 0 auto">
        <div style="height: calc(162px / 3); background-color: #ffdf68"></div>
        <div style="height: calc(162px / 3); background-color: #ffc431"></div>
        <div style="height: calc(162px / 3); background-color: #feab21"></div>
        <div
          class="beer2"
          ref="beer2"
          :style="{ height: beerHeight + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  // wrap-beer
  const glass = ref()
  const beer = ref()
  const head = ref()
  const beerFill = ref(0)
  const headPos = ref(0)

  // wrap-beer2
  const glass2 = ref()
  const beer2 = ref()
  const beerHeight = ref(0)
  const beerRise = (e) => {
    beer.value.classList.add('fill')
    head.value.classList.add('active')
    beerFill.value = e
    headPos.value = beerFill.value - 14
  }

  const beerRise2 = (e) => {
    beer2.value.classList.add('fill')
    beerHeight.value = 100 - e
  }
  onMounted(() => {
    beerRise(100)
    beerRise2(72)
  })
</script>

<style lang="scss" scoped>
  .glass2 {
    position: relative;
    width: 118px;
    height: 162px;
    border: 8px solid #d9d9d9;
    border-top: none;
    background-color: #d9d9d9;
    overflow: hidden;
  }
  .beer2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    animation: beerFillReverse 1.5s;
    &:not(.fill) {
      height: 100% !important;
    }
  }

  .wrap-beer {
    position: relative;
    margin-top: 100px;
  }
  .bottle_handle {
    height: 140px;
    width: 45px;
    position: absolute;
    border-radius: 0 34px 34px 0;
    top: 55px;
    left: 188px;
    box-shadow: 0 0 0 20px #ecf0f1;
    &:after {
      content: '';
      position: absolute;
      width: 15px;
      height: 20px;
      background-color: black;
      opacity: 0.1;
      top: -20px;
      left: 0px;
    }
    &:before {
      content: '';
      position: absolute;
      width: 15px;
      height: 20px;
      background-color: black;
      opacity: 0.1;
      top: 140px;
      left: 0px;
    }
  }

  @keyframes beerFill {
    0% {
      height: 0;
    }
  }

  @keyframes beerFillReverse {
    0% {
      height: 100%;
    }
  }

  @keyframes foam {
    0% {
      bottom: 0;
      opacity: 0;
    }
  }
  .beer {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fac92c;
    bottom: 0;
    height: 0;
    border-radius: 0 0 27px 27px;
    animation: beerFill 1500ms ease-in;
  }

  .glass {
    position: relative;
    width: 200px;
    height: 300px;

    // Defining border properties
    border-style: none solid solid solid;
    border-width: 0px 16px 26px 16px;
    border-color: #ecf0f1;
    border-radius: 16px 16px 50px 50px;
    box-shadow: 1px 1px 15px -5px black;
    z-index: 5;

    &:before,
    &:after {
      content: '';
      position: absolute;
      border-radius: 10px;
      background: #fff;
      width: 10px;
      opacity: 0.4;
    }

    &:before {
      height: 70%;
      left: 60px;
      top: 5%;
      z-index: 1;
    }

    &:after {
      height: 70%;
      right: 44px;
      top: 5%;
    }
  }

  .head {
    position: absolute;
    width: 100px;
    padding-bottom: 100px;
    background: #fff;
    bottom: 0;
    left: 16px;
    border-radius: 50%;
    z-index: -1;
    animation: foam 1600ms ease-in;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: #fff;
      border-radius: 50%;
      animation: form 1600ms ease-in;
    }

    &.active {
      // bottom: 82%;
      background-color: #fcf5d7;
      &:before,
      &:after {
        content: '';
        position: absolute;
        background: #fcf5d7;
        border-radius: 50%;
      }
    }

    &:before {
      width: 60px;
      height: 60px;
      left: 78px;
      top: 18px;
    }

    &:after {
      width: 60px;
      height: 60px;
      left: 108px;
      top: 18px;
    }
  }

  .bubble {
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 10px;
    opacity: 0.5;
    bottom: -15px;
    z-index: 5;
  }

  .bubble_1 {
    @extend .bubble;
    left: 20px;
    animation: bubble 1.5s infinite linear 0s;
  }
  .bubble_2 {
    @extend .bubble;
    left: 50px;
    animation: bubble 3s infinite linear 0s;
  }
  .bubble_3 {
    @extend .bubble;
    left: 70px;
    animation: bubble 1s infinite linear 0.1s;
  }
  .bubble_4 {
    @extend .bubble;
    left: 90px;
    animation: bubble 2s infinite linear 0s;
  }
  .bubble_5 {
    @extend .bubble;
    left: 110px;
    animation: bubble 3.5s infinite linear 0.1s;
  }
  .bubble_6 {
    @extend .bubble;
    left: 140px;
    animation: bubble 2.5s infinite linear 0s;
  }

  @keyframes bubble {
    0% {
      bottom: 0;
      opacity: 0.5;
    }
    50% {
      bottom: 100px;
    }
    100% {
      opacity: 0.1;
      bottom: 260px;
    }
  }
</style>
