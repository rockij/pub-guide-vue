import { createRouter, createWebHistory } from 'vue-router'
import main from '@/publish/router/MenuMain.js'
import common from '@/publish/router/MenuCommon.js'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'PubGuide',
			meta: { title: 'PUBLISH GUIDE' },
			component: () => import('@/publish/PubGuide.vue'),
		},
		{
			path: '/IndexView',
			name: 'IndexView',
			// meta: { title: '현황판' },
			component: () => import('@/publish/IndexView.vue'),
		},
		...common, //공통
		...main, //메인
	],
})

export default router
