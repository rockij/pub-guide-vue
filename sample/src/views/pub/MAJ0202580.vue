<template>
  <div class="contents">
    <div class="report-title mb-4">
      <!-- picker -->
      <v-btn
        variant="text"
        class="fs-24 pa-0"
        @click="
          ;(calendarMonth = !calendarMonth), (calendarWeek = !calendarWeek)
        "
      >
        <span class="pr-2">2023.08.03</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-btn>
      <v-chip label size="small" class="chip-default"
        ><span class="text-dot">미연결</span></v-chip
      >
    </div>
    <div v-if="calendarWeek" class="calendar-body only-week">
      <div v-for="(week, i) in weekday" :key="i" class="weekday">
        {{ week }}
      </div>
      <!-- 일 -->
      <div v-for="n in 7" :key="n" class="days">
        <div class="text">{{ n }}</div>
      </div>
    </div>
    <!-- //이번주 -->
    <div v-if="calendarMonth" class="calendar-body">
      <div v-for="(week, i) in weekday" :key="i" class="weekday">
        {{ week }}
      </div>
      <!-- 일 -->
      <div v-for="n in 31" :key="n" class="days">
        <div class="text">{{ n }}</div>
      </div>
    </div>
    <!-- //달력 -->
    <v-btn
      v-if="calendarMonth"
      variant="text"
      class="btn-native-bar"
      title="달력"
      @click=";(calendarMonth = !calendarMonth), (calendarWeek = !calendarWeek)"
    ></v-btn>
    <div class="section-page bg py-8">
      <ReportResult :bnShow="'now'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </ReportResult>
      <v-card variant="flat" rounded="xl" class="pt-4 pr-6 pb-4 pl-6">
        <v-card-title class="pa-0">
          <span class="fs-20"
            ><strong>4,000</strong>걸어서<br /><strong>1,510kcal</strong>
            소모했어요</span
          >
        </v-card-title>
        <!-- chart -->
        <div class="mt-8" style="height: 190px">chart</div>
        <ul class="d-flex justify-space-around fs-13 text-center mt-3">
          <li v-for="item in goalsList" :key="item.id">
            <strong class="d-block fs-20">{{ item.value }}</strong
            >{{ item.text }}
          </li>
        </ul>
        <div class="calendar-info type mt-6">
          <div class="state" v-for="(state, i) in goalsStates" :key="i">
            <v-avatar :color="state.color" size="8" />
            <div class="text">{{ state.text }}</div>
          </div>
        </div>
      </v-card>
    </div>
    <!-- //차트 -->

    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">걸음 기록</v-btn>
      </h2>
      <p class="text-info-grey">최근 3개 기록만 표시됩니다</p>
      <CardReport v-for="report in reports" :key="report.id">
        <template #date>{{ report.date }}</template>
        <template #state>{{ report.device }}</template>
        <template #content>
          <div class="fs-18 mt-1" v-html="report.record" />
        </template>
      </CardReport>
      <!-- //기록 component -->
    </div>
    <!-- //걸음기록 -->

    <div ref="progress" class="section-page">
      <h2 class="tit-03">나의 걸음 3대</h2>
      <div class="progress-bar mt-14" data-num="99">
        <div class="bar">
          <span class="num">0</span>
        </div>
      </div>
      <ul class="progress-list mt-1">
        <li v-for="item in mystepList" :key="item.id">
          {{ item.name }}<br />{{ item.text }}
        </li>
      </ul>
      <div class="d-flex mt-4 gap-8">
        <div
          v-for="item in mystepResult"
          :key="item.id"
          class="list-smcard flex-1-1-100"
        >
          <img src="@/assets/images/icon-map4.svg" class="icon" alt="" />
          <strong class="num">{{ item.num }}</strong>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <!-- //나의 걸음 3대 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">비교 데이터</v-btn>
      </h2>
      <p class="text-info-grey fs-16">
        다양한 비교군 걸음 데이터를 분석해드려요
      </p>
      <div class="d-flex mt-4 gap-8">
        <template v-for="item in compareList" :key="item.id">
          <v-btn
            v-if="item.button === true"
            variant="text"
            class="list-smcard btn-plus flex-1-1-100"
            >{{ item.text }}</v-btn
          >
          <div v-else class="list-smcard flex-1-1-100">
            <img src="@/assets/images/icon-map4.svg" class="icon" alt="" />
            <strong class="num">{{ item.num }}</strong>
            <span class="text">{{ item.text }}</span>
          </div>
        </template>
      </div>
    </div>
    <!-- //비교 데이터 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">걸음 분석</v-btn>
      </h2>
      <p class="text-info-grey fs-16">기간별 인사이트를 보여드려요</p>
      <v-tabs align-tabs="start" class="tab-line mt-4">
        <v-tab :ripple="false" class="fs-20">1주일</v-tab>
        <v-tab :ripple="false" class="fs-20">1개월</v-tab>
        <v-tab :ripple="false" class="fs-20">6개월</v-tab>
      </v-tabs>
      <div class="d-flex fs-14 mt-8">
        2023.08.14~2023.08.24<strong class="fs-16 ml-auto"
          >평균 20,500걸음</strong
        >
      </div>
      <div class="mt-5">chart</div>
    </div>
    <!-- //걸음 분석 -->
  </div>
</template>
<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import { ref, reactive, onMounted, onUnmounted } from 'vue'
  export default {
    components: {
      CardReport,
      ReportResult
    },
    setup() {
      const weekday = reactive(['일', '월', '화', '수', '목', '금', '토'])
      const calendarWeek = ref(true)
      const calendarMonth = ref(false)
      const goalsList = reactive([
        {
          id: 1,
          value: '2.7km',
          text: '이동거리'
        },
        {
          id: 2,
          value: '12’59”',
          text: '소모시간'
        },
        {
          id: 3,
          value: '85cm',
          text: '보폭'
        }
      ])
      const goalsStates = reactive([
        {
          color: '#3F484E',
          text: '걸음수'
        },
        {
          color: '#FFCC00',
          text: '소모 칼로리'
        }
      ])
      const reports = ref([
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '플랫폼',
          record: '<strong>2,000kcal</strong> (15,000걸음)'
        },
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '플랫폼',
          record: '<strong>2,000kcal</strong> (15,000걸음)'
        },
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '플랫폼',
          record: '<strong>2,000kcal</strong> (15,000걸음)'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '부족'
        }
      }

      const mystepList = reactive([
        {
          id: 1,
          name: '입문자',
          text: '0~150'
        },
        {
          id: 2,
          name: '중급',
          text: '150~250'
        },
        {
          id: 3,
          name: '고급',
          text: '150-~250'
        },
        {
          id: 4,
          name: '선수급',
          text: '325~'
        }
      ])
      const mystepResult = reactive([
        {
          id: 1,
          num: '120점',
          text: '최고걸음'
        },
        {
          id: 2,
          num: '120점',
          text: '누적 걸음'
        },
        {
          id: 3,
          num: '100점',
          text: '목표 달성일'
        }
      ])
      const compareList = reactive([
        {
          id: 1,
          num: '20%',
          text: '여성상위'
        },
        {
          id: 2,
          num: '20%',
          text: '또래상위'
        },
        {
          id: 3,
          button: true,
          text: '추가하기'
        }
      ])
      const progress = ref()
      const excuted = ref(false)
      const initialRate = ref(0)
      function numberAnimation() {
        const targetRate = parseInt(
          progress.value.querySelector('.progress-bar').getAttribute('data-num')
        )
        let numAnimation = setInterval(function () {
          const bar = progress.value.querySelector('.progress-bar .bar')
          const num = progress.value.querySelector('.progress-bar .num')
          initialRate.value++
          if (initialRate.value == targetRate) {
            clearInterval(numAnimation)
          }
          //bar.style.width = `${targetRate}%`
          bar.style.width = `${initialRate.value}%`
          if (targetRate >= 0 && targetRate <= 25) {
            num.innerText = `걸음 입문자 ${initialRate.value}점`
          } else if (targetRate > 25 && targetRate <= 50) {
            num.innerText = `걸음 중급자 ${initialRate.value}점`
          } else if (targetRate > 50 && targetRate <= 75) {
            num.innerText = `걸음 고급자 ${initialRate.value}점`
          } else {
            num.innerText = `걸음 선수급 ${initialRate.value}점`
          }
          console.log(targetRate)
        }, 20) // 대략 1초 (css 1s 동일, 수정시 css도 수정)
      }
      function scroll() {
        if (this.scrollTop > progress.value.offsetTop - 200) {
          if (!excuted.value) {
            console.log('progress start')
            numberAnimation()
            excuted.value = true
          }
        }
        if (
          Math.ceil(this.scrollTop) + this.clientHeight >=
          this.scrollHeight
        ) {
          console.log('스크롤 끝')
          if (!excuted.value) {
            numberAnimation()
            excuted.value = true
          }
        }
      }
      onMounted(() => {
        document.querySelector('#mainWrap').addEventListener('scroll', scroll)
      })
      onUnmounted(() => {
        document
          .querySelector('#mainWrap')
          .removeEventListener('scroll', scroll)
      })

      return {
        weekday,
        calendarWeek,
        calendarMonth,
        goalsList,
        goalsStates,
        reports,
        getText,

        mystepList,
        mystepResult,
        compareList,
        progress,
        initialRate,
        scroll,
        excuted,
        numberAnimation
      }
    }
  }
</script>
