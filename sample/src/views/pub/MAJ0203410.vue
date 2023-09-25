<template>
  <div class="contents">
    <div class="report-title mb-4">
      <!-- picker -->
      <v-btn variant="text" class="fs-24 pa-0">
        <span class="pr-2">2023.08.03</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-btn>
    </div>

    <div class="section-page bg py-8 bg-2">
      <v-card
        class="msg-link alert-card mb-4"
        variant="flat"
        color="#fff"
        rounded="lg"
        v-if="isAlert"
      >
        <div class="alert-title">검진결과 업로드 해보세요!</div>
        <v-btn
          variant="text"
          size="small"
          @click="show = false"
          class="btn-close alert-close"
          color="#444"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="alert-desc pt-1">
          최근검진 결과로 권장칼로리를 계산했어요. 목표설정하기에서 최신정보로
          업데이트 해보세요
        </div>
        <img
          src="@/assets/images/icon-alert.svg"
          alt=""
          class="alert-icon pt-1"
        />
      </v-card>
      <ReportResult :bnShow="'self'" :videBox="false" class="pb-4">
        <!-- <strong class="title">지금 바로 진료</strong> -->
        휴레이 메시지가 2줄까지 노출됩니다 3줄이상은 입력 금지
      </ReportResult>
      <v-card variant="flat" rounded="xl" class="calorie-card">
        <v-chip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="chip-default"
          >체중유지</v-chip
        >
        <v-card-title class="pa-0 pt-1">
          <strong class="fs-20 ml-1"
            >오늘 1,000kcal 내에서 <br />
            잘 챙겨 먹어야해요!</strong
          >
        </v-card-title>
        <img
          src="@/assets/images/icon-apple.svg"
          alt=""
          class="calorie-img pt-8"
        />
        <!-- chart -->
        <div class="calorie-desc pt-4">
          점심시간인데 아직 한끼도 안 먹었어요!
        </div>
      </v-card>
    </div>

    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">식사 기록</v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>

      <!-- 기록 component -->
      <CardReport
        v-for="report in reports"
        :key="report.id"
        class="report-food"
      >
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
        <!-- card 내용 -->
        <template #content>
          <div class="content-grid">
            <img src="@/assets/images/img-food.png" alt="" class="img-food" />
            <div>
              <v-chip
                label
                size="small"
                variant="flat"
                color="#F8F8F8"
                class="chip-default"
              >
                {{ getText(report.state) }}
              </v-chip>
              <div class="mt-1">
                {{ report.food }}
              </div>
              <div class="fs-18 mt-1">
                <strong>{{ report.record }}</strong
                >bpm
              </div>
            </div>
          </div>
        </template>
      </CardReport>
    </div>
    <div class="section-page section-calorie">
      <div class="title">칼로리 내 먹을 수 있는 음식</div>
      <div class="desc pt-1">GI지수가 낮은 건강한 음식을 알려드릴께요</div>
      <div class="swipe mt-4">스와이프영역</div>
    </div>
    <div class="section-page section-chart">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">식사 분석</v-btn>
      </h2>
      <div class="text-info-grey">기간별 인사이트를 보여드려요</div>
      <div class="swipe mt-4">챠트영역</div>
    </div>
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import { ref } from 'vue'
  export default {
    components: { ReportResult, CardReport },
    setup() {
      const isAlert = true
      const reports = ref([
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          food: '계란, 사과, 바나나, 귤',
          device: '직접입력',
          state: 'morning',
          record: '82'
        },
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          food: '마카롱, 반숙란',
          device: '직접입력',
          state: 'morningS',
          record: '82-105'
        },
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          food: '양념치킨',
          device: '직접입력',
          state: 'lunch',
          record: '60-82'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'morning':
            return '아침'
          case 'morningS':
            return '아침간식'
          case 'lunch':
            return '점심'
          case 'dinner':
            return '저녁'
        }
      }
      return {
        isAlert,
        reports,
        getText
      }
    }
  }
</script>
