<template>
  <div class="contents">
    <!-- 검색 btn -->
    <v-btn
      block
      variant="outlined"
      rounded="xl"
      color="#FFB11B"
      height="60"
      :ripple="false"
      class="btn-search"
      @click="goPath('MAJ0104640')"
    >
      <span class="text">
        궁금하신 내용을 입력해 주세요
        <img src="@/assets/images/icon-search.svg" alt="검색" />
      </span>
    </v-btn>
    <!-- 카테고리 btn -->
    <v-btn variant="text" class="mt-6 pl-0" @click="dialog = true">
      <span class="fs-24">{{ selBtn.text }}</span>
      <v-icon class="ml-2">
        <img src="@/assets/images/icon-arrow-down.svg" alt="" />
      </v-icon>
    </v-btn>
    <!-- FAQ TOP 10 accordion list -->
    <FAQList
      :filteredList="filteredList"
      :getCategory="getCategory"
      :hightlight="hightlight"
      @update="goPath"
    />
    <!--// 링크 -->
  </div>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">카테고리 선택</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <v-btn
            variant="text"
            block
            v-for="btn in btns"
            :key="btn.value"
            class="btn-list-block"
            @click="dialog = false"
          >
            {{ btn.text }}
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import router from '@/router'
  import { ref } from 'vue'
  import FAQList from './FAQList.vue'
  export default {
    components: { FAQList },
    setup() {
      const dialog = ref(false)
      const text = ref('')
      const selBtn = ref({})
      const btns = ref([
        {
          value: 0,
          text: '일반'
        },
        {
          value: 1,
          text: '건강검진'
        },
        {
          value: 2,
          text: '루틴'
        },
        {
          value: 3,
          text: '혜택'
        },
        {
          value: 4,
          text: '챌린지'
        }
      ])
      const list = ref([
        {
          id: 0,
          title: '스타에 대해 궁금해요.',
          path: '/MAJ0104631'
        },
        {
          id: 1,
          title: '기술 관련된 궁금한 사항은 이렇게 문의해주세요!',
          path: '/MAJ0104631'
        },
        {
          id: 2,
          title:
            '휴대폰이 본인 명의가 아닌 경우 오케어 앱을 어떻게 사용할 수 있나요?',
          path: '/MAJ0104631'
        },
        {
          id: 3,
          title:
            '구글 플레이스토어에서 오케어 앱 업데이트 시 앱이 실행되지 않아요',
          path: '/MAJ0104631'
        },
        {
          id: 4,
          title: '서비스나 상품과 관련해서 궁금한 점이 있어요',
          path: '/MAJ0104631'
        },
        {
          id: 0,
          title: '스타에 대해 궁금해요',
          path: '/MAJ0104631'
        },
        {
          id: 1,
          title: '기술 관련된 궁금한 사항은 이렇게 문의해주세요!',
          path: '/MAJ0104631'
        },
        {
          id: 2,
          title:
            '휴대폰이 본인 명의가 아닌 경우 오케어 앱을 어떻게 사용할 수 있나요?',
          path: '/MAJ0104631'
        },
        {
          id: 3,
          title:
            '구글 플레이스토어에서 오케어 앱 업데이트 시 앱이 실행되지 않아요',
          path: '/MAJ0104631'
        },
        {
          id: 4,
          title: '서비스나 상품과 관련해서 궁금한 점이 있어요',
          path: '/MAJ0104631'
        }
      ])
      function getCategory(val) {
        switch (val) {
          case 0:
            return '일반'
          case 1:
            return '건강검진'
          case 2:
            return '루틴'
          case 3:
            return '혜택'
          case 4:
            return '챌린지'
        }
      }
      function goPath(val, props) {
        if (props) {
          router.params = props
        }
        router.push(val)
      }
      function filteredList() {
        selBtn.value = router.params
        if (text.value !== '') {
          return list.value.filter((i) => i.title.includes(text.value))
        } else if (selBtn.value.value !== undefined) {
          return list.value.filter((i) => i.id === selBtn.value.value)
        } else {
          return list.value
        }
      }
      function hightlight(i) {
        // 검색어 하이라이트 정규식
        return i.replace(new RegExp(text.value, 'gi'), (match) => {
          return '<span class="text-blue font-weight-bold">' + match + '</span>'
        })
      }

      return {
        dialog,
        text,
        selBtn,
        btns,
        list,
        getCategory,
        goPath,
        filteredList,
        hightlight
      }
    }
  }
</script>
