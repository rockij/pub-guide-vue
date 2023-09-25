<template>
  <div class="contents">
    <div class="circle-container">
      <div class="circle"></div>
      <div class="wave _0"></div>
      <div class="wave _0"></div>
      <div class="wave _0"></div>
      <div class="wavbe-below _0"></div>
      <div class="desc _0">
        <h2>Today</h2>
        <p>
          <b>0<span>%</span></b>
        </p>
      </div>
    </div>

    <div class="circle-container">
      <div class="circle"></div>
      <div class="wave _50"></div>
      <div class="wave _50"></div>
      <div class="wave _50"></div>
      <div class="wavbe-below _50"></div>
      <div class="desc _50">
        <h2>Today</h2>
        <p>
          <b>50<span>%</span></b>
        </p>
      </div>
    </div>

    <div class="circle-container">
      <div class="circle"></div>
      <div class="wave _100"></div>
      <div class="wave _100"></div>
      <div class="wave _100"></div>
      <div class="wavbe-below _100"></div>
      <div class="desc _100">
        <h2>Today</h2>
        <p>
          <b>100<span>%</span></b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
  }

  .desc {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-bottom: 0;
    text-align: center;
  }
  .circle-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 2rem auto;
  }

  .circle-container > * {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 10px solid white;
  }

  .circle {
    background: white;
  }

  .wave {
    background: url(https://coiger.github.io/fill-water-animation/wave.svg)
      repeat-x;
    opacity: 0.8;
  }

  .wave-below {
    background-color: #3b46d3;
  }

  .wave {
    &._0 {
      background-position: 0% 110%;
    }
  }

  .wave-below {
    &._0 {
      clip-path: polygon(0% 110%, 0% 110%, 110% 110%, 110% 110%);
    }
  }
</style>
