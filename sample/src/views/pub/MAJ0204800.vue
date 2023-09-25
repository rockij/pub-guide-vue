<template>
  <div class="contents">
    <div class="tit-06">{{ money(100000) }} P</div>
    <div class="point-area mb-6">
      <div>30일내 소멸예정 1,000 P</div>
      <!-- tooltip component -->
      <Tooltip
        btnText="리워드포인트란"
        text="루틴/미션 달성, 이벤트 참여 등 다양한 건강활동을 통해 포인트를
          적립하실 수 있어요. 포인트의 유효기간은 적립된 날로부터 1년이며,
          어디서든 다 사용가능해요. 유효기간이 짧은 포인트부터 우선 사용해요."
      >
      </Tooltip>
    </div>
    <!-- bnts -->
    <div class="sorting-area type-2 mb-8">
      <v-btn variant="outlined" class="btn-sorting">포인트 교환하기</v-btn>
      <v-btn variant="outlined" class="btn-sorting">기부하기</v-btn>
    </div>
    <div class="section-page">
      <!-- sorting -->
      <div class="btn-area sorting-area">
        <v-btn
          variant="flat"
          :class="[
            'btn-sorting',
            { 'v-btn--variant-outlined': selBtn === btn.value }
          ]"
          v-for="btn in btns"
          :key="btn.value"
          @click="selected(btn.value)"
          >{{ btn.text }}</v-btn
        >
      </div>
      <div class="sorting-data pt-7">
        <div class="ws-60">
          <v-select
            :items="option"
            v-model="value"
            density="compact"
            hide-details
            label="월"
            single-line
            class="select-default"
          ></v-select>
        </div>
        <div class="text-date">2023.07.29 ~ 2023.08.03</div>
      </div>
      <!-- list -->
      <ul class="list-faq mt-4" v-if="list.length > 0">
        <li v-for="(item, i) in list" :key="i" class="item">
          <div>
            <div class="text-tit">{{ item.text }}</div>
            <div class="info-group">
              <span class="type">{{ item.date }}</span>
            </div>
          </div>
          <div
            class="text-point"
            :class="{ 'text-red': item.range === 'decrease' }"
          >
            <span v-if="item.range === 'decrease'">-</span>
            <span v-if="item.range === 'increase'">+</span>
            {{ item.point }}P
          </div>
        </li>
      </ul>
      <!-- no data -->
      <Nodata v-else>사용/적립 내역이 없습니다</Nodata>
    </div>
  </div>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'
  import Tooltip from '@/components/Tooltip.vue'
  import { ref, reactive } from 'vue'

  export default {
    components: { Nodata, Tooltip },
    setup() {
      const point = ref(0)
      const value = ref('전체')
      const option = reactive(['전체', '1개월', '3개월'])
      const selBtn = ref()
      const btns = reactive([
        {
          value: 1,
          text: '1주일'
        },
        {
          value: 2,
          text: '1개월'
        },
        {
          value: 3,
          text: '3개월'
        },
        {
          value: 4,
          text: '6개월'
        },
        {
          value: 5,
          text: '1년'
        }
      ])
      const list = reactive([
        {
          text: '일상루틴 완료',
          date: '2023.08.14 23:12',
          point: '50',
          range: 'increase'
        },
        {
          text: '건강검진(일반) 조회',
          date: '2023.08.14 23:12',
          point: '2,000',
          range: 'increase'
        },
        {
          text: '월간 리포트 조회',
          date: '2023.08.14 23:12',
          point: '10',
          range: 'increase'
        },
        {
          text: '상품구매',
          date: '2023.08.14 23:12',
          point: '2,000',
          range: 'decrease'
        },
        {
          text: '소멸',
          date: '2023.08.14 23:12',
          point: '3',
          range: 'decrease'
        }
      ])
      function selected(val) {
        selBtn.value = val
      }
      function money(point) {
        return point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      return {
        value,
        option,
        point,
        btns,
        selBtn,
        list,
        selected,
        money
      }
    }
  }
</script>
