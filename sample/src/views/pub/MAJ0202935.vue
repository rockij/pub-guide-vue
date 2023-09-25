<template>
  <div class="contents">
    <!-- 월경 기간 입력 -->
    <v-text-field
      class="input-basic textfield-default"
      label="월경 기간"
      required
      persistent-placeholder
      variant="outlined"
      suffix="일"
      placeholder="월경 기간"
    >
    </v-text-field>
    <!-- 월경 주기 입력 -->
    <v-text-field
      class="input-basic textfield-default mt-4"
      label="월경 주기"
      required
      persistent-placeholder
      variant="outlined"
      suffix="일"
      placeholder="월경 주기"
    >
    </v-text-field>

    <div class="section-page mt-8">
      <div class="tit-01 pb-1">월경 시작 알림</div>
      <div class="text-info-grey mb-4">
        예정일이 다가오면 알려드릴게요.<br />
        언제부터 알려드릴까요?
      </div>
      <div class="btn-area sorting-area">
        <v-btn
          variant="flat"
          :class="['btn-sorting', { 'v-btn--selected': selBtn === btn.value }]"
          v-for="btn in btns"
          :key="btn.value"
          @click="selBtn = btn.value"
          >{{ btn.text }}</v-btn
        >
      </div>
    </div>

    <div class="section-page">
      <div class="switch-area">
        <div>
          <div class="tit-01 pb-0">사랑일 숨김</div>
          <div class="text-info-grey">
            캘린더에 보여지는 사랑일 아이콘을 숨길 수 있어요
          </div>
        </div>
        <v-switch
          class="switch-default switch-text"
          v-model="switchOff"
          :label="switchOff"
          color="#FFD338"
          true-value="on"
          false-value="off"
          hide-details
        ></v-switch>
      </div>
      <!-- toast 팝업 -->
      <v-snackbar v-model="snackbar"> 정상적으로 변경되었습니다 </v-snackbar>
    </div>

    <!-- 버튼 -->
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          @click.stop="snackbar = true"
          >확인</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const switchOff = ref('on')
      const snackbar = ref(false)
      const result = ref(false)
      const selBtn = ref()
      const btns = reactive([
        {
          value: 1,
          text: '1일 전'
        },
        {
          value: 2,
          text: '3일 전'
        },
        {
          value: 3,
          text: '7일전'
        },
        {
          value: 4,
          text: '알림없음'
        }
      ])
      return {
        switchOff,
        snackbar,
        result,
        selBtn,
        btns
      }
    }
  }
</script>
