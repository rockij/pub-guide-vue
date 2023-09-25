<template>
  <div class="contents">
    <!-- 달력 -->
    <div class="calendar large">
      <!-- 달 선택 -->
      <div class="calendar-head py-4">
        <div class="container">
          <v-btn variant="flat" density="compact" height="20" class="btn">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <div class="tit-02 pb-0 px-1">2023.08</div>
          <v-btn variant="flat" density="compact" height="20" class="btn">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
      <!-- 주 -->
      <div class="calendar-body">
        <div v-for="(week, i) in weekday" :key="i" class="weekday">
          {{ week }}
        </div>
        <!-- 일 -->
        <div v-for="n in 31" :key="n" class="days">
          <div class="text">{{ n }}</div>
          <!-- 상태 -->
          <div class="state" v-if="n === 17">
            <v-avatar color="#907776" size="6" />
            <v-avatar color="#E02A61" size="6" />
            <v-avatar color="#B171F7" size="6" />
          </div>
        </div>
      </div>
      <!-- 몸상태 안내 -->
      <div class="calendar-info">
        <div class="state" v-for="(state, i) in states" :key="i">
          <v-avatar :color="state.color" size="8" />
          <div class="text">{{ state.text }}</div>
        </div>
      </div>
    </div>
    <!-- 몸상태 단계별 상태 -->
    <ReportResult :bnShow="'now'" :videBox="false" class="mt-6">
      D-18 슬슬 입터짐이 찾아올 시기에요
    </ReportResult>
    <!-- 배란상태 -->
    <div class="box-rounded py-6 mt-4">
      <div class="text-day">03월 11일 목요일</div>
      <div class="tit-02 mt-1">
        배란예정일(임신가능성 높음)<br />
        피임약 복용 13일째
      </div>
      <div class="btn-double mt-4">
        <v-btn
          v-for="(item, i) in condition"
          :key="i"
          v-model="selected"
          variant="text"
          height="46"
          class="btn-default"
          :class="{ selected: selected.includes(item.value) }"
          @click="getCondition(item.value)"
          >{{ item.text }}</v-btn
        >
      </div>
      <ul class="list-faq mt-3">
        <!-- 사랑일 -->
        <li class="item-2">
          <div class="text-tit-02">사랑일</div>
          <v-btn
            variant="tonal"
            rounded="lg"
            height="32"
            class="px-3 fs-13"
            @click="modal = true"
          >
            <span class="text-blue">추가</span>
          </v-btn>
          <div class="text-info-grey" v-if="text1">
            <span>{{ text1 }}</span>
            <span v-if="text2">, {{ text2 }}</span>
          </div>
        </li>
        <!-- 몸 상태 -->
        <li class="item-2">
          <div class="text-tit-02">몸 상태</div>
          <v-btn
            variant="tonal"
            rounded="lg"
            height="32"
            class="px-3 fs-13"
            @click="modal2 = true"
          >
            <span class="text-blue">추가</span>
          </v-btn>
          <div class="text-info-grey">
            <span v-for="(item, i) in list" :key="item"
              >{{ item }}
              <template v-if="list.length !== i + 1">,</template>
            </span>
            <v-btn
              v-if="result.length > list.length"
              density="compact"
              variant="text"
              height="auto"
              @click.stop="moreText"
              class="btn-grayline"
              >더보기</v-btn
            >
          </div>
        </li>
        <!-- 피임약 복용 여부 -->
        <li class="item-2">
          <div class="text-tit-02">피임약 복용 여부</div>
          <v-btn
            variant="tonal"
            rounded="lg"
            height="32"
            class="px-3 fs-13"
            @click="modal3 = true"
          >
            <span class="text-blue">추가</span>
          </v-btn>
          <div class="text-info-grey" v-if="text3">
            <span>{{ text3 }}</span>
            <span v-if="text4">, {{ text4 }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <!-- 사랑일 팝업 -->
  <MAJ0202944 v-model="modal" @update="addText" @close="modal = false" />
  <!-- 몸상태 팝업 -->
  <MAJ0202945 v-model="modal2" @update="addText2" @close="modal2 = false" />
  <!-- 피임약 팝업 -->
  <MAJ0202946 v-model="modal3" @update="addText" @close="modal3 = false" />
</template>

<script>
  import ReportResult from '@/components/BanerReport.vue'
  import MAJ0202944 from './MAJ0202944.vue'
  import MAJ0202945 from './MAJ0202945.vue'
  import MAJ0202946 from './MAJ0202946.vue'

  import { ref, reactive } from 'vue'
  export default {
    components: { MAJ0202944, MAJ0202945, MAJ0202946, ReportResult },
    setup() {
      const text1 = ref()
      const text2 = ref()
      const text3 = ref()
      const text4 = ref()
      const result = ref([])
      const list = ref([])
      const selected = reactive([])
      const modal = ref(false)
      const modal2 = ref(false)
      const modal3 = ref(false)
      const weekday = reactive(['일', '월', '화', '수', '목', '금', '토'])
      const states = reactive([
        {
          color: '#907776',
          text: '몸상태'
        },
        {
          color: '#E02A61',
          text: '사랑'
        },
        {
          color: '#B171F7',
          text: '피임약'
        }
      ])
      const condition = reactive([
        { value: 1, text: '월경' },
        { value: 2, text: '월경종료' }
      ])
      function getCondition(val) {
        selected.includes(val)
          ? selected.splice(selected.indexOf(val), 1)
          : selected.push(val)
      }
      function addText(val1, val2, data) {
        if (data === 1) {
          text1.value = val1
          text2.value = val2
          modal.value = false
        } else if (data === 2) {
          text3.value = val1
          text4.value = val2
          modal3.value = false
        }
      }
      function addText2(val1, val2, val3) {
        result.value = [...val1, ...val2, ...val3].map((i) => i.text)
        list.value = result.value.slice(0, 8)
        modal2.value = false
      }
      function moreText() {
        list.value = result.value
      }
      return {
        text1,
        text2,
        text3,
        text4,
        result,
        list,
        selected,
        modal,
        modal2,
        modal3,
        weekday,
        states,
        condition,
        addText,
        addText2,
        moreText,
        getCondition
      }
    }
  }
</script>
