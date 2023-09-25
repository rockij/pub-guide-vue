<template>
  <div class="contents">
    <v-card variant="flat" color="#009746" class="rounded-xl pa-4">
      <div class="box-reward">
        <div class="d-flex align-center">
          <v-avatar color="#fff" size="20" class="fs-14">P</v-avatar>
          <div class="pl-2">리워드 포인트</div>
        </div>
        <div>{{ money(10500) }} P</div>
      </div>
    </v-card>
    <div class="box-rounded mt-4 fs-18">
      <div class="child">
        <div class="ws-60">
          <v-select
            :items="option"
            v-model="value"
            density="comfortable"
            hide-details
            label="월"
            single-line
            class="select-default"
          ></v-select>
        </div>
        <div>에</div>
      </div>
      <div class="child">
        <div>{{ money(10500) }} P</div>
        <div class="font-weight-regular">모았어요</div>
      </div>
      <div class="text-value mb-8">7월보다 {{ money(900) }}P 더 모았어요</div>
      <!-- chart -->
      <div style="min-height: 190px; text-align: center" v-if="point > 0">
        line chart
      </div>
      <!-- no data -->
      <Nodata :iconSize="'sm'" v-else> 포인트 기록을 모으고 있어요 </Nodata>
    </div>
    <div class="section-page">
      <div class="tit-02">사람들은 6개월동안 얼마나 모았을까요?</div>
      <div class="mb-8">상위 10% 사용자 리워드포인트 평균</div>
      <!-- chart -->
      <div style="min-height: 190px; text-align: center">bar chart</div>
    </div>
    <div class="section-page">
      <div class="tit-02">사람들은 6개월동안 얼마나 모았을까요?</div>
      <div class="mb-8">상위 10% 사용자 리워드포인트 평균</div>
      <!-- chart -->
      <div style="min-height: 190px; text-align: center">pie chart</div>
    </div>
    <div class="section-page">
      <div class="tit-02">
        최대 {{ money(98650) }}P를 모을 수 있어요<br />혜택을 놓치지 마세요
      </div>
    </div>
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: { Nodata },
    setup() {
      const value = ref('8월')
      const option = reactive(['6월', '7월', '8월'])
      const point = ref(0)
      function money(point) {
        return point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      return {
        value,
        option,
        point,
        money
      }
    }
  }
</script>
