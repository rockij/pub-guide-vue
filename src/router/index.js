import { createRouter, createWebHistory } from 'vue-router'
import main from '@/publish/router/MenuMain.js'
import prework from '@/publish/router/MenuPreWork.js'
import common from '@/publish/router/MenuCommon.js'
import usedetail from '@/publish/router/MenuUseDetail.js'
import price from '@/publish/router/MenuPrice.js'
import mycard from '@/publish/router/MenuMycard.js'
import myinfo from '@/publish/router/MenuMyinfo.js'
import benefit from '@/publish/router/MenuBenefit.js'
import payment from '@/publish/router/MenuPayment.js'
import finance from '@/publish/router/MenuFinance.js'
import living from '@/publish/router/MenuLiving.js'
import card from '@/publish/router/MenuCard.js'
import voucher from '@/publish/router/MenuVoucher.js'
import customer from '@/publish/router/MenuCustomer.js'
import components from '@/publish/router/ComponentsList.js'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'IndexView',
			// meta: { title: '현황판' },
			component: () => import('@/publish/IndexView.vue'),
		},
		{
			path: '/ComponentsList',
			name: 'ComponentsList',
			meta: { title: '공통 컴포넌트 리스트' },
			component: () => import('@/publish/ComponentsList.vue'),
		},
		...prework, //선도개발
		...common, //공통
		...main, //메인
		...usedetail, //이용내역
		...price, //대금결제
		...mycard, //내카드관리
		...myinfo, //내정보관리
		...benefit, //혜택
		...payment, //결제
		...finance, //금융
		...living, //생활편의
		...card, //카드
		...voucher, //공공/바우처
		...customer, //고객센터

		...components, //공통 컴포넌트
	],
})

export default router
