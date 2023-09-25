<template>
  <div class="contents">
    <ul class="settings">
      <li v-for="item in settingLists" :key="item.id" class="settings-item">
        <a href="javascript:;" class="settings-link d-flex">
          <span class="left-area">
            <span>{{ item.text }}</span>
            <span class="settings-version" v-if="item.version">
              {{ item.version }}
            </span>
          </span>
          <span class="right-area">
            <span class="settings-state" v-if="item.state">{{
              item.state
            }}</span
            ><v-icon>mdi-chevron-right</v-icon>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const settingLists = reactive([
        {
          id: 1,
          text: '로그인 관리'
        },
        {
          id: 2,
          text: '알림 수신 설정'
        },
        {
          id: 3,
          text: '약관 및 개인정보처리'
        },
        {
          id: 5,
          text: '앱 정보',
          version: 'V2.0.0',
          state: '업데이트 하기'
        },
        {
          id: 6,
          text: '오픈소스 라이브러리'
        },
        {
          id: 7,
          text: '사업자정보'
        }
      ])
      return { settingLists }
    }
  }
</script>
