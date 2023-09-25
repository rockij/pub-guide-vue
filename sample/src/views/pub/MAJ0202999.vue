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
    </div>
    <div v-if="calendarMonth" class="calendar-body">
      <div v-for="(week, i) in weekday" :key="i" class="weekday">
        {{ week }}
      </div>
      <div v-for="n in 31" :key="n" class="days">
        <div class="text">{{ n }}</div>
      </div>
    </div>
    <v-btn
      v-if="calendarMonth"
      variant="text"
      class="btn-native-bar"
      title="달력"
      @click=";(calendarMonth = !calendarMonth), (calendarWeek = !calendarWeek)"
    ></v-btn>
    <!-- //달력 -->

    <div class="section-page bg py-8">
      <v-card variant="flat" rounded="xl" class="pa-4">
        <v-card-title class="pa-0 fs-20 font-weight-bold"
          >오건강님<br />오늘 하루 어떠셨나요?
        </v-card-title>
        <p class="text-info-grey2 fs-16 mt-2">
          토닥토닥 마음관리가 필요한 오늘 기분 기록을 해보세요
        </p>
      </v-card>
    </div>
    <!-- //오늘상태선택 -->

    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">이달의 감정 랭킹 Top5</v-btn>
      </h2>
    </div>
    <!-- //이달의 감정 랭킹 Top5 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">기분 기록</v-btn>
      </h2>
      <p class="text-info-grey">전체 일기를 한번에 확인해보세요</p>
    </div>
    <!-- //이달의 감정 랭킹 Top5 -->

    <div class="section-page">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">기분 기록</v-btn>
      </h2>
      <div class="text-info-grey">전체 일기를 한번에 확인해보세요</div>
      <CardReport v-for="report in reports" :key="report.id">
        <template #date>{{ report.date }}</template>
        <template #state>{{ report.device }}</template>
        <!-- 버튼영역 -->
        <template #btn>
          <div class="btn-area">
            <!-- 수정버튼 -->
            <v-btn icon variant="flat" density="compact">
              <img src="@/assets/images/icon-pencil.svg" alt="수정" />
            </v-btn>
            <!-- 삭제버튼 -->
            <v-btn icon variant="flat" density="compact">
              <img src="@/assets/images/icon-delete.svg" alt="삭제" />
            </v-btn>
          </div>
        </template>
        <template #content>
          <v-chip
            label
            size="small"
            variant="outlined"
            :color="report.state"
            class="chip-default"
          >
            {{ report.stateName }}
          </v-chip>
          <div class="fs-16 mt-3">
            <div class="d-flex gap-8 align-center font-weight-semibold fs-14">
              <img src="@/assets/images/icon-hurray-emoji01.svg" alt="" />
              편안한
            </div>
            <p class="mt-3">{{ report.record }}</p>
          </div>
        </template>
      </CardReport>
    </div>
    <!-- //기분 기록 -->
  </div>
</template>
<script>
  import CardReport from '@/components/CardReport.vue'
  import { ref, reactive } from 'vue'
  export default {
    components: { CardReport },
    setup() {
      const weekday = reactive(['일', '월', '화', '수', '목', '금', '토'])
      const calendarWeek = ref(true)
      const calendarMonth = ref(false)
      const reports = ref([
        {
          id: 1,
          date: '2023.09.18 오전 6:00',
          device: '직접입력',
          state: 'error',
          stateName: '매우나쁨',
          record:
            '사용자가 입력한 내용이 노출됩니다  사용자가 입력한 내용이 노출됩니다 '
        },
        {
          id: 2,
          date: '2023.09.18 오전 6:00',
          device: '직접입력',
          state: 'warning',
          stateName: '보통',
          record:
            '사용자가 입력한 내용이 노출됩니다  사용자가 입력한 내용이 노출됩니다 '
        },
        {
          id: 3,
          date: '2023.09.18 오전 6:00',
          device: '직접입력',
          state: 'error',
          stateName: '나쁨',
          record:
            '사용자가 입력한 내용이 노출됩니다  사용자가 입력한 내용이 노출됩니다 '
        }
      ])
      return {
        weekday,
        calendarWeek,
        calendarMonth,
        reports
      }
    }
  }
</script>
