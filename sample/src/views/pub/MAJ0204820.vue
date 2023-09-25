<template>
  <div class="contents">
    <div class="tit-01 font-weight-regular pb-2">소멸예정 리워드포인트</div>
    <div class="text-point type-1">1,000 P</div>
    <ul class="list-circle mt-4">
      <li v-for="(item, i) in list" :key="i">{{ item }}</li>
    </ul>
    <ul class="list-faq mt-8" v-if="list.length > 0">
      <li v-for="n in 4" :key="n" class="item">
        <div>
          <div class="text-tit">유효기간 만료일</div>
          <div class="info-group">
            <span class="date">08.18</span>
            <span class="type">D-1</span>
          </div>
        </div>
        <div class="text-point">50P</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const list = ref([
        '유효기간 경과로 소멸이 예상되는 포인트입니다',
        '30일 내의 소멸예정 포인트만 조회합니다',
        '적립된 리워드포인트는 적립 월 기준 12개월 경과 후 일단위로 소멸됩니다'
      ])
      return {
        list
      }
    }
  }
</script>
