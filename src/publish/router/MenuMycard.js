/*
	[ depth1: 내카드관리 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const mycard = [
	{
		path: '/MainView',
		id: 'MCD100000',
		category: true,
		meta: {
			title: '내카드관리 > 보유카드 내역', // 페이지 상단 고정
			depth1: '내카드관리',
			depth2: '보유카드관리',
			depth3: '보유카드 내역',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MCD100000',
		meta: {
			title: '내카드관리 > 카드비밀번호 변경', // 페이지 상단 고정
			depth3: '카드비밀번호 변경',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MCD100000',
		meta: {
			title: '내카드관리 > 결제일 변경', // 페이지 상단 고정
			depth3: '결제일 변경',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MCD200000',
		category: true,
		meta: {
			title: '내카드관리 > 이용한도 조회/변경', // 페이지 상단 고정
			depth1: '내카드관리',
			depth2: '이용한도',
			depth3: '이용한도 조회/변경',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default mycard
