<template>
  <v-layout>
    <v-app-bar prominent class="header">
      <v-btn flat icon @click="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h1 class="page-title font-weight-medium">
        {{ $router.currentRoute.value.name }}
      </h1>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list
        v-for="(item, index) in link"
        :key="index"
        @click.stop="goPath(item)"
        class="px-4"
      >
        <div class="d-flex justify-space-between">
          {{ item.name }}
          <v-icon v-if="item.children">
            <template v-if="item.active">mdi-chevron-up</template>
            <template v-else>mdi-chevron-down</template>
          </v-icon>
        </div>
        <v-divider class="mt-2" />
        <v-expand-transition>
          <div v-if="item.active">
            <v-list
              v-for="(child, i) in item.children"
              :key="i"
              @click.stop="goPath(child)"
              class="pl-2"
            >
              {{ child.name }}
            </v-list>
            <v-divider class="mt-2" />
          </div>
        </v-expand-transition>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<script>
  import router from '@/router'
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const drawer = ref(false)
      const menu = ref(false)

      const link = reactive([
        {
          path: '/guide',
          name: '공통 가이드'
        },
        {
          path: '/BottomSheet',
          name: 'BottomSheet'
        },
        {
          path: '/Dialogs',
          name: 'Dialogs'
        },
        {
          path: '/Sticky',
          name: 'Sticky'
        },

        {
          name: '고객센터',
          active: false,
          children: [
            {
              path: '/MAJ0104620',
              name: '고객센터 서브메인'
            },
            {
              path: '/MAJ0104630',
              name: 'FAQ 목록/FAQ 검색결과'
            },
            {
              path: '/MAJ0104631',
              name: 'FAQ 상세'
            },
            {
              path: '/MAJ0104650',
              name: '1:1 문의 목록'
            },
            {
              path: '/MAJ0104660',
              name: '1:1 문의 상세'
            },
            {
              path: '/MAJ0104670',
              name: '1:1 문의 문의 유형 선택'
            },
            {
              path: '/MAJ0104681',
              name: '1:1 문의 등록'
            }
          ]
        },
        {
          name: '마이페이지',
          active: false,
          children: [
            {
              path: '/MAJ0204740',
              name: '나의정보 기본정보관리'
            },
            {
              path: '/MAJ0204760',
              name: '키 정보 입력'
            },
            {
              path: '/MAJ0204770',
              name: '해외통관번호 입력'
            },
            {
              path: '/MAJ0204750',
              name: '이메일 인증'
            },
            {
              path: '/MAJ0204780',
              name: '이메일 등록'
            },
            {
              path: '/MAJ0204790',
              name: '나의리워드 서브메인'
            },
            {
              path: '/MAJ0204800',
              name: '포인트 적립/사용 내역'
            },
            {
              path: '/MAJ0204820',
              name: '소멸예정내역'
            },
            {
              path: '/MAJ0204821',
              name: '포인트 교환하기'
            },
            {
              path: '/MAJ0105540',
              name: '회원탈퇴 탈퇴사유 입력'
            },
            {
              path: '/MAJ0105541',
              name: '회원탈퇴 탈퇴안내'
            },
            {
              path: '/MAJ0105550',
              name: '회원탈퇴 회원탈퇴 완료'
            },
            {
              path: '/MAJ0205310',
              name: '기기연결'
            },
            {
              path: '/MAJ0205340',
              name: '혈당계'
            },
            {
              path: '/MAJ0204690',
              name: '마이페이지 서브 메인'
            }
          ]
        },
        {
          name: '나의건강',
          active: false,
          children: [
            {
              path: '/MAB3500',
              name: '캘린더-월경'
            },
            {
              path: '/MAJ0202930',
              name: '여성생체리듬 기록'
            },
            {
              path: '/MAJ0202931',
              name: '월경기간 선택 팝업'
            },
            {
              path: '/MAJ0202935',
              name: '설정'
            }
          ]
        },
        {
          name: '라이프로그',
          active: false,
          children: [
            {
              path: '/MAJ0202914',
              name: '심박'
            },
            {
              path: '/MAJ0203410',
              name: '식사'
            },
            {
              path: '/MAJ0202580',
              name: '걸음'
            },
            {
              path: '/MAJ0202970',
              name: '혈압'
            },
            {
              path: '/MAJ0202999',
              name: '기분'
            }
          ]
        },
        {
          name: '증상검색',
          active: false,
          children: [
            {
              path: '/MAJ0305650',
              name: '우리 가족 증상 검색'
            },
            {
              path: '/MAJ0305670',
              name: '신체부위선택 남'
            },
            {
              path: '/MAJ0305670-1',
              name: '신체부위선택 여'
            },
            {
              path: '/MAJ0305671',
              name: '신체명칭 선택'
            },
            {
              path: '/MAJ0305690',
              name: '문진진행'
            },
            {
              path: '/MAJ0305710',
              name: '문진진행 결과레포트'
            }
          ]
        },
        {
          name: '병원찾기',
          active: false,
          children: [
            {
              path: '/MAJ0305730',
              name: '병원 목록 보기'
            },
            {
              path: '/MAJ0305731',
              name: '병원 목록 보기(결과없음)'
            },
            {
              path: '/MAJ0305735',
              name: '병원검색 팝업'
            },
            {
              path: '/MAJ0305740',
              name: '병원 상세'
            }
          ]
        },
        {
          name: '약국찾기',
          active: false,
          children: [
            {
              path: '/MAJ0305750',
              name: '약국 목록 보기'
            },
            {
              path: '/MAJ0305752',
              name: '약국검색 팝업'
            }
          ]
        },
        {
          name: '설정',
          active: false,
          children: [
            {
              path: '/MAJ0100262',
              name: '설정 목록'
            },
            {
              path: '/MAJ0100270',
              name: '자동로그인 설정'
            },
            {
              path: '/MAJ0100280',
              name: '알림메시지 수신여부 설정'
            },
            {
              path: '/MAJ0100290',
              name: '약관동의 목록'
            },
            {
              path: '/MAJ0100300',
              name: '서비스 약관동의 목록 및 철회'
            },
            {
              path: '/MAJ0100330',
              name: '사업자정보'
            }
          ]
        },
        {
          name: '메시지함',
          active: false,
          children: [
            {
              path: '/MAJ0100380',
              name: '메시지함 목록'
            }
          ]
        }
      ])
      function MenuShow() {
        menu.value = !menu.value
      }
      function goPath(val) {
        if (val.path) {
          router.push(val.path)
        } else {
          val.active = !val.active
          // drawer.value = false
        }
      }

      return {
        drawer,
        menu,
        link,
        MenuShow,
        goPath
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-list {
    .v-list:first-child {
      margin-top: 8px;
    }
  }
</style>
