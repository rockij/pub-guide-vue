<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="no-transition"
    class="modal-full"
  >
    <v-card>
      <div class="modal-body pt-4">
        <div class="flex-shrink-0 modal-body-container">
          <v-btn variant="text" class="btn-box-search"
            >지번, 도로명으로 검색</v-btn
          >
          <div class="list-column mt-9">
            <ul>
              <li v-for="item in hosmapList" :key="item.id">
                <v-btn variant="text">
                  <i :class="`icon-${item.icon}`" />
                  <span class="text"
                    ><span>{{ item.text }}</span> {{ item.title }}
                    <span
                      v-html="item.del"
                      v-if="item.del"
                      class="btn-del"
                    ></span>
                  </span>
                </v-btn>
              </li>
            </ul>
          </div>
          <div class="section-page mt-6">
            <h2 class="tit-01">최근검색</h2>
            <div class="tabs-simple3">
              <v-btn variant="text" class="btn-del">강남구 삼성동</v-btn>
              <v-btn variant="text" class="btn-del">강남구 논현동</v-btn>
            </div>
          </div>
        </div>
        <!-- [D] 개발시 삭제 -->
        <v-btn class="btn-sample" @click="$emit('close')">전체팝업닫기</v-btn>
        <!-- //[D] 개발시 삭제 -->
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import { ref } from 'vue'
  export default {
    props: ['modal2'],
    emits: ['close'],
    data() {
      return {
        hosmapList: [
          {
            id: 1,
            text: '현재 위치로 설정',
            title: '클릭하시면 현재 위치 기준으로 검색됩니다',
            icon: 'map'
          },
          {
            id: 2,
            text: '장소 등록',
            title: '클릭하시면 원하는 장소등록이 가능합니다',
            icon: 'plus'
          },
          {
            id: 3,
            text: '등록 장소',
            del: '<v-btn>강남구 역삼동</v-btn>',
            icon: 'ribbon'
          }
        ]
      }
    },
    setup(props) {
      const dialog = ref(props.modal2)
      return { dialog }
    }
  }
</script>
