<template>
  <div class="contents">
    <div class="report-title mb-4">
      <!-- picker -->
      <v-btn variant="text" class="fs-24 pa-0">
        <span class="pr-2">2023.08.03</span>
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-btn>
      <v-chip label size="small" class="chip-default"
        ><span class="text-dot">미연결</span></v-chip
      >
    </div>
    <div class="section-page bg py-8">
      <ReportResult :bnShow="'now'" :videBox="false" class="mb-4">
        휴레이 메시지는 아직 확정되지 않았다
      </ReportResult>

      <v-card variant="flat" rounded="xl" class="pa-4">
        <v-card-title class="pa-0">
          <p class="d-flex align-center">
            <v-chip
              label
              size="small"
              variant="outlined"
              color="red"
              class="chip-default"
              >수축기</v-chip
            >
            <span class="ml-2">132-140mmHg</span>
          </p>
          <p class="d-flex align-center">
            <v-chip
              label
              size="small"
              variant="outlined"
              color="primary"
              class="chip-default"
              >이완기</v-chip
            >
            <span class="ml-2">30-32mmHg</span>
          </p>
        </v-card-title>

        <!-- chart -->
        <div class="pt-8">
          <v-sheet>
            <v-tabs v-model="tab" hide-slider class="tabs-round navy">
              <v-tab value="bloodPressure" class="btn-tab" :ripple="false"
                >혈압</v-tab
              >
              <v-tab value="pulse" class="btn-tab" :ripple="false">맥박</v-tab>
            </v-tabs>
            <v-sheet>
              <v-window v-model="tab">
                <v-window-item value="bloodPressure">
                  <v-sheet class="container-chart">혈압</v-sheet>
                </v-window-item>

                <v-window-item value="pulse"
                  ><v-sheet class="container-chart"
                    >맥박</v-sheet
                  ></v-window-item
                >
              </v-window>
            </v-sheet>
          </v-sheet>
          <div class="btn-area2">
            <v-btn
              variant="text"
              height="46px"
              class="bdr-8 fs-16 font-weight-bold skip"
              block
              >입력하기</v-btn
            >
          </div>
        </div>
      </v-card>
    </div>

    <!-- 혈압기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈압 기록</v-btn>
      </h2>
      <div class="text-info-grey">최근 3개 기록만 표시됩니다</div>

      <!-- 기록 component -->
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
        <!-- card 내용 -->
        <template #content>
          <v-chip
            label
            size="small"
            variant="outlined"
            :color="report.state"
            class="chip-default"
          >
            {{ getText(report.state) }}
          </v-chip>
          <p class="hasMemo pt-1" v-if="report.hasMemo">메모 있음</p>
          <div class="mt-1">
            <v-btn
              variant="text"
              append-icon="mdi-chevron-right"
              class="fs-18 px-0"
              height="auto"
              >{{ report.record }} <span class="text-none">mmHg</span>
            </v-btn>
          </div>
        </template>
      </CardReport>
    </div>

    <!-- 혈압 분석 -->
    <div class="section-page py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">혈압 분석</v-btn>
      </h2>
      <div class="text-info-grey">기간별 인사이트를 보여드려요</div>
      <v-sheet class="pt-4">
        <v-tabs v-model="Analysis" class="tabs-sliding">
          <v-tab value="one" :ripple="false" class="btn-tab">혈압</v-tab>
          <v-tab value="two" :ripple="false" class="btn-tab">맥박</v-tab>
        </v-tabs>
        <v-sheet>
          <v-window v-model="Analysis">
            <v-window-item value="one"
              ><v-sheet class="container-chart reverse"
                >혈압</v-sheet
              ></v-window-item
            >

            <v-window-item value="two"
              ><v-sheet class="container-chart reverse"
                >맥박</v-sheet
              ></v-window-item
            >
          </v-window>
        </v-sheet>
      </v-sheet>
      <v-list lines="one" class="list-round-box align-center">
        <v-sheet class="mx-auto round-box-container bdr-8">
          <v-list-item class="list-round-box-items" to="#none">
            <template v-slot:prepend>
              <v-avatar
                color="grey-darken-3"
                image="/src/assets/images/dummy-map.png"
                size="24"
                class="bdr-4"
              ></v-avatar>
            </template>
            <template v-slot:title>올바른 가정혈압 측정 중요성</template>
            <template v-slot:append>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-list-item>
        </v-sheet>
      </v-list>
    </div>
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import ReportResult from '@/components/BanerReport.vue'
  import { ref } from 'vue'

  export default {
    components: { CardReport, ReportResult },
    setup() {
      const tab = ref(null)
      const Analysis = ref(null)
      const reports = ref([
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '기기',
          state: 'error',
          record: '132/32',
          hasMemo: true
        },
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '플랫폼',
          state: 'error',
          record: '132/32'
        },
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '직접입력',
          state: 'error',
          record: '132/32'
        }
      ])
      function getText(props) {
        switch (props) {
          case 'primary':
            return '증가'
          case 'success':
            return '안정'
          case 'error':
            return '위험(고혈압 2단계)'
        }
      }
      return {
        reports,
        getText,
        Analysis,
        tab
      }
    }
  }
</script>
