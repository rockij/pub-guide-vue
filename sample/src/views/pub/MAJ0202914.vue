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
      <v-card variant="flat" rounded="xl" class="pa-4">
        <v-card-title class="pa-0">
          <img src="@/assets/images/icon-heart-02.svg" alt="" />
          <strong class="fs-20 ml-1">86bpm</strong>
        </v-card-title>
        <!-- chart -->
        <div class="pt-8">chart</div>
      </v-card>
    </div>

    <!-- 심박기록 -->
    <div class="py-8">
      <h2 class="tit-03 tit-link pb-2">
        <v-btn block variant="text">심박기록</v-btn>
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
          <div class="fs-18 mt-1">
            <strong>{{ report.record }}</strong
            >bpm
          </div>
        </template>
      </CardReport>
    </div>

    <!-- 성별 연령별 비교 -->
    <div class="section-page py-8">
      <h2 class="tit-03 tit-link pb-5">성별 연령별 비교</h2>
      <div style="background-color: #d9d9d9; opacity: 0.5; height: 270px">
        개발적용 예정
      </div>
      <v-card variant="flat" rounded="lg" class="box-info pa-4 mt-4">
        김국민님이 최근에 측정하신 평균 안정심박수를 같은 성별 및 연령과
        비교했을때 평균이시네요
      </v-card>
    </div>
  </div>
</template>

<script>
  import CardReport from '@/components/CardReport.vue'
  import { ref } from 'vue'

  export default {
    components: { CardReport },
    setup() {
      const reports = ref([
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '플랫폼',
          state: 'primary',
          record: '82'
        },
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '플랫폼',
          state: 'error',
          record: '82-105'
        },
        {
          id: 0,
          date: '2023.09.18 오전 6:00',
          device: '플랫폼',
          state: 'success',
          record: '60-82'
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
      return {
        reports,
        getText
      }
    }
  }
</script>
