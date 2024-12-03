/*
	[ 선도개발 STATUS ]
*/
const prework = [
	{
		path: '/login',
		id: 'login',
		meta: {
			title: '로그인', // 페이지 상단 고정
			depth2: '로그인',
			depth3: '',
			status: '',
		},
		type: '',
		story: '',
		design: '',
		end: '',
		comment: ``,
		component: () => import('@/publish/views/prework/login.vue'),
	},
	{
		path: '/UseDetail',
		id: 'UseDetail',
		meta: {
			title: '통합이용내역', // 페이지 상단 고정
			depth2: '이용내역',
			depth3: '',
			status: '',
		},
		type: '',
		end: '',
		comment: ``,
		component: () => import('@/publish/views/prework/UseDetail.vue'),
	},
	{
		path: '/COA100000',
		id: 'COA100000',
		meta: {
			title: '선도개발 > 이용대금명세서', // 페이지 상단 고정
			depth2: '이용대금명세서',
			depth3: '',
			status: '',
		},
		type: '',
		end: '',
		comment: ``,
		component: () => import('@/publish/views/common/COA100000.vue'),
	},
]

export default prework
