import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/pub/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/BottomSheet',
      name: 'BottomSheet',
      component: () => import('@/views/pub/BottomSheet.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/views/pub/Guide.vue')
    },
    {
      path: '/MAJ0104620',
      name: '고객센터 서브메인',
      component: () => import('@/views/pub/MAJ0104620.vue'),
      props: true
    },
    {
      path: '/MAJ0104630',
      name: 'FAQ 목록',
      component: () => import('@/views/pub/MAJ0104630.vue')
    },
    {
      path: '/MAJ0104631',
      name: 'FAQ 상세',
      component: () => import('@/views/pub/MAJ0104631.vue')
    },
    {
      path: '/MAJ0104640',
      name: '검색결과',
      component: () => import('@/views/pub/MAJ0104640.vue')
    },
    {
      path: '/MAJ0104650',
      name: '1:1 문의 목록',
      component: () => import('@/views/pub/MAJ0104650.vue')
    },
    {
      path: '/MAJ0104660',
      name: '1:1 문의 상세',
      component: () => import('@/views/pub/MAJ0104660.vue')
    },
    {
      path: '/MAJ0104670',
      name: '1:1 문의 문의 유형 선택',
      component: () => import('@/views/pub/MAJ0104670.vue')
    },
    {
      path: '/MAJ0104680',
      name: '1:1 문의 프로그램 선택',
      component: () => import('@/views/pub/MAJ0104680.vue')
    },
    {
      path: '/MAJ0104681',
      name: '1:1 문의 등록',
      component: () => import('@/views/pub/MAJ0104681.vue')
    },
    {
      path: '/MAJ0202914',
      name: '심박',
      component: () => import('@/views/pub/MAJ0202914.vue')
    },
    {
      path: '/MAJ0203410',
      name: '식사',
      component: () => import('@/views/pub/MAJ0203410.vue')
    },
    {
      path: '/MAJ0202580',
      name: '걸음',
      component: () => import('@/views/pub/MAJ0202580.vue')
    },
    {
      path: '/MAJ0202999',
      name: '기분',
      component: () => import('@/views/pub/MAJ0202999.vue')
    },
    {
      path: '/MAJ0202930',
      name: '월경(여성건강)',
      component: () => import('@/views/pub/MAJ0202930.vue')
    },
    {
      path: '/MAJ0202944',
      name: '사랑일',
      component: () => import('@/views/pub/MAJ0202944.vue')
    },
    {
      path: '/MAJ0202945',
      name: '몸 상태',
      component: () => import('@/views/pub/MAJ0202945.vue')
    },
    {
      path: '/MAJ0202931',
      name: '월경기간 선택 팝업',
      component: () => import('@/views/pub/MAJ0202931.vue')
    },
    {
      path: '/MAB3500',
      name: '캘린더-월경',
      component: () => import('@/views/pub/MAB3500.vue')
    },
    {
      path: '/MAJ0202935',
      name: '월경-설정',
      component: () => import('@/views/pub/MAJ0202935.vue')
    },
    {
      path: '/MAJ0204740',
      name: '나의정보 기본정보관리',
      component: () => import('@/views/pub/MAJ0204740.vue')
    },
    {
      path: '/MAJ0204760',
      name: '키 정보 입력',
      component: () => import('@/views/pub/MAJ0204760.vue')
    },
    {
      path: '/MAJ0204770',
      name: '해외통관번호 입력',
      component: () => import('@/views/pub/MAJ0204770.vue')
    },
    {
      path: '/MAJ0204750',
      name: '이메일 인증',
      component: () => import('@/views/pub/MAJ0204750.vue')
    },
    {
      path: '/MAJ0204780',
      name: '이메일 등록',
      component: () => import('@/views/pub/MAJ0204780.vue')
    },
    {
      path: '/MAJ0204790',
      name: '나의리워드 서브메인',
      component: () => import('@/views/pub/MAJ0204790.vue')
    },
    {
      path: '/MAJ0204800',
      name: '포인트 적립/사용 내역',
      component: () => import('@/views/pub/MAJ0204800.vue')
    },
    {
      path: '/MAJ0204820',
      name: '소멸예정 리워드포인트',
      component: () => import('@/views/pub/MAJ0204820.vue')
    },
    {
      path: '/MAJ0204821',
      name: '포인트 교환하기',
      component: () => import('@/views/pub/MAJ0204821.vue')
    },
    {
      path: '/MAJ0305650',
      name: '우리 가족 증상 검색',
      component: () => import('@/views/pub/MAJ0305650.vue')
    },
    {
      path: '/MAJ0305670',
      name: '신체부위선택 남',
      component: () => import('@/views/pub/MAJ0305670.vue')
    },
    {
      path: '/MAJ0305670-1',
      name: '신체부위선택 여',
      component: () => import('@/views/pub/MAJ0305670-1.vue')
    },
    {
      path: '/MAJ0305671',
      name: '신체명칭 선택',
      component: () => import('@/views/pub/MAJ0305671.vue')
    },
    {
      path: '/MAJ0305690',
      name: '문진진행',
      component: () => import('@/views/pub/MAJ0305690.vue')
    },
    {
      path: '/MAJ0305710',
      name: '문진진행 결과레포트',
      component: () => import('@/views/pub/MAJ0305710.vue')
    },
    {
      path: '/MAJ0105540',
      name: '회원탈퇴 탈퇴사유 입력',
      component: () => import('@/views/pub/MAJ0105540.vue')
    },
    {
      path: '/MAJ0105541',
      name: '회원탈퇴 탈퇴안내',
      component: () => import('@/views/pub/MAJ0105541.vue')
    },
    {
      path: '/MAJ0105550',
      name: '회원탈퇴 회원탈퇴 완료',
      component: () => import('@/views/pub/MAJ0105550.vue')
    },
    {
      path: '/MAJ0100262',
      name: '설정 목록',
      component: () => import('@/views/pub/MAJ0100262.vue')
    },
    {
      path: '/MAJ0100270',
      name: '자동로그인 설정',
      component: () => import('@/views/pub/MAJ0100270.vue')
    },
    {
      path: '/MAJ0100280',
      name: '알림메시지 수신여부 설정',
      component: () => import('@/views/pub/MAJ0100280.vue')
    },
    {
      path: '/MAJ0100290',
      name: '약관동의 목록',
      component: () => import('@/views/pub/MAJ0100290.vue')
    },
    {
      path: '/MAJ0100300',
      name: '서비스 약관동의 목록 및 철회',
      component: () => import('@/views/pub/MAJ0100300.vue')
    },
    {
      path: '/MAJ0100330',
      name: '사업자정보',
      component: () => import('@/views/pub/MAJ0100330.vue')
    },

    {
      path: '/MAJ0205310',
      name: '기기연결',
      component: () => import('@/views/pub/MAJ0205310.vue')
    },
    {
      path: '/MAJ0205340',
      name: '혈당계',
      component: () => import('@/views/pub/MAJ0205340.vue')
    },
    {
      path: '/Dialogs',
      name: 'Dialogs',
      component: () => import('@/views/pub/Dialogs.vue')
    },
    {
      path: '/MAJ0305730',
      name: '병원 목록 보기',
      component: () => import('@/views/pub/MAJ0305730.vue')
    },
    {
      path: '/MAJ0305731',
      name: '병원 목록 보기(결과없음)',
      component: () => import('@/views/pub/MAJ0305731.vue')
    },
    {
      path: '/MAJ0305735',
      name: '병원검색 팝업',
      component: () => import('@/views/pub/MAJ0305735.vue')
    },
    {
      path: '/MAJ0305740',
      name: '병원 상세',
      component: () => import('@/views/pub/MAJ0305740.vue')
    },
    {
      path: '/MAJ0305750',
      name: '약국 목록 보기',
      component: () => import('@/views/pub/MAJ0305750.vue')
    },
    {
      path: '/MAJ0305752',
      name: '약국검색 팝업',
      component: () => import('@/views/pub/MAJ0305752.vue')
    },
    {
      path: '/Sticky',
      name: 'Sticky',
      component: () => import('@/views/pub/Sticky.vue')
    },
    {
      path: '/Lifeanimation',
      name: 'lifeanimation',
      component: () => import('@/views/pub/Lifeanimation.vue')
    },
    {
      path: '/Lifeanimation2',
      name: 'lifeanimation2',
      component: () => import('@/views/pub/Lifeanimation2.vue')
    },
    {
      path: '/WaterAnimation',
      name: 'WaterAnimation',
      component: () => import('@/views/pub/WaterAnimation.vue')
    },
    {
      path: '/MAJ0204690',
      name: '마이페이지 서브 메인',
      component: () => import('@/views/pub/MAJ0204690.vue')
    },
    {
      path: '/Calendar',
      name: '달력',
      component: () => import('@/views/pub/Calendar.vue')
    },
    {
      path: '/MAJ0100380',
      name: '알림 목록',
      component: () => import('@/views/pub/MAJ0100380.vue')
    },
    {
      path: '/MAJ0202970',
      name: '혈압',
      component: () => import('@/views/pub/MAJ0202970.vue')
    },
    {
      path: '/TimeCount',
      name: 'TimeCount',
      component: () => import('@/views/pub/TimeCount.vue')
    }
  ]
})

export default router
