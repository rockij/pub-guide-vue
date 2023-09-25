<template>
  <article class="article-info">
    <HospitalCard
      v-for="item in lists"
      :key="item.id"
      :articleClass="item.articleClass"
      :titleBisde="item.titleBisde"
      :title="item.title"
      :titleClass="'fs-20'"
      :title2="item.title2"
      :title2Class="'mt-5'"
      :road="item.road"
      :subject="item.subject"
      :tagDivider="item.tagDivider"
      :tags="item.tags"
      :state="item.state"
      :stateClass="item.stateClass"
      :path="item.path"
      @update="goPath"
    />
    <buttonSns :snsBtns="snsBtns" class="mt-4" />
  </article>
</template>
<script>
  import router from '@/router'
  import buttonSns from '@/components/ButtonSns.vue'
  import HospitalCard from '@/components/CardHospital.vue'
  import { reactive } from 'vue'
  export default {
    props: ['lists'],
    components: {
      HospitalCard,
      buttonSns
    },
    data() {
      return {
        shareList: [
          {
            id: 1,
            title: '전화연결',
            class: 'call'
          },
          {
            id: 2,
            title: '공유하기',
            class: 'share'
          },
          {
            id: 3,
            title: '즐겨찾기',
            class: 'mark'
          },
          {
            id: 4,
            title: '길찾기',
            class: 'map'
          }
        ]
      }
    },
    setup() {
      const hospitalList = reactive([
        {
          id: 1,
          articleClass: 'type',
          titleBisde: true,
          title: '강남초이스영상의학과의원',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          road: '5m',
          subject: '이비인후과 전문의 1명, 내과전문의 1명',
          tags: '#여의사 #야간진료 #주말진료',
          state: '진료종료',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        }
      ])
      const snsBtns = reactive([
        {
          id: 1,
          title: '전화연결',
          class: 'call',
          tel: '02-554-5547'
        },
        {
          id: 2,
          title: '공유하기',
          class: 'share',
          func: funcSns
        },
        {
          id: 3,
          title: '즐겨찾기',
          class: 'mark',
          func: funcFavorit
        },
        {
          id: 4,
          title: '길찾기',
          class: 'map',
          func: funcMap
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      function funcSns() {
        alert('공유하기')
      }
      function funcFavorit() {
        alert('즐겨찾기')
      }
      function funcMap() {
        alert('길찾기')
      }
      return {
        hospitalList,
        snsBtns,
        goPath,
        funcSns,
        funcFavorit,
        funcMap
      }
    }
  }
</script>
