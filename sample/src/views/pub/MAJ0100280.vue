<template>
  <div class="contents">
    <div class="question-area pt-7 mb-7" v-if="alarmGuide">
      <p class="text">기기 설정에서 알림이 꺼져 있어요!</p>
      <div class="info-group info-alarm">
        <span class="type"
          >알림 설정이 꺼져 있으면 알림을 받을 수 없어요. 기기 설정에서 오케어
          알림을 허용해 주세요.</span
        >
      </div>
      <v-btn variant="text" class="set-btn mt-3">설정하기</v-btn>
    </div>

    <div class="alarm-title">
      <div class="title">개별 맞춤 알림</div>
      <div class="desc">홍길동님이 선택한 알림을 보내드려요!</div>
    </div>
    <div class="alarm-area">
      <ul>
        <li v-for="item in selectedAlarm" :key="item.id" class="alarm-item">
          <div class="top-text">
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
          <v-switch
            class="switch-default switch-text"
            v-model="switchOff1"
            :label="switchOff1"
            color="#FFD338"
            true-value="on"
            false-value="off"
            hide-details
          ></v-switch>
        </li>
      </ul>
    </div>
    <div class="alarm-title pt-8">
      <div class="title">이벤트 혜택 알림</div>
      <div class="desc">
        특별한 혜택과 이벤트 정보를 실시간으로 받아 볼 수 있는 알림으로 개별
        맞춤 알림 수신과 무관해요
      </div>
    </div>
    <div class="alarm-area">
      <ul>
        <li v-for="item in eventAlarm" :key="item.id" class="alarm-item">
          <div class="title align-self-center">{{ item.title }}</div>
          <v-switch
            v-if="item.switch"
            class="switch-default switch-text"
            v-model="switchOff2"
            :label="switchOff2"
            color="#FFD338"
            true-value="on"
            false-value="off"
            hide-details
          ></v-switch>
          <div class="text-btn" v-if="!item.switch">
            <v-btn variant="text"
              >{{ item.btn }}<v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const alarmGuide = true
      const switchOff1 = ref('on')
      const switchOff2 = ref('off')
      const selectedAlarm = reactive([
        {
          id: 0,
          title: '챌린지 알림',
          desc: '챌린지 수행, 랭킹 등에 대한 알림 받기'
        },
        {
          id: 1,
          title: '복약 알림',
          desc: '설정한 약 복용 시간에 알림 받기'
        },
        {
          id: 2,
          title: '프로그램 알림',
          desc: '예약 변경, 취소 등 구매한 프로그램에 대한 알림 받기'
        },
        {
          id: 3,
          title: '건강검진 알림',
          desc: '건강검진 결과 분석 도착 알림 받기'
        },
        {
          id: 4,
          title: '커뮤니티 알림',
          desc: '작성한 게시글에 대한 댓글, 좋아요, 신고 등 활동에 대한 알림 받기'
        }
      ])
      const eventAlarm = reactive([
        {
          id: 0,
          title: '개인정보 마케팅 및 활용 동의',
          switch: false,
          btn: '동의안함'
        },
        {
          id: 1,
          title: '앱 푸시',
          switch: true
        },
        {
          id: 2,
          title: '문자메세지',
          switch: true
        },
        {
          id: 3,
          title: '이메일',
          switch: true
        }
      ])
      return {
        switchOff1,
        switchOff2,
        selectedAlarm,
        eventAlarm,
        alarmGuide
      }
    }
  }
</script>
