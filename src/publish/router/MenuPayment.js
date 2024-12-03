/*
	[ depth1: 결제 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const payment = [
	{
		path: '/MainView',
		id: 'MNB100000',
		meta: {
			title: '결제 > 결제수단관리', // 페이지 상단 고정
			depth2: '결제메인',
			depth3: '결제수단관리',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MNB100000',
		category: true,
		meta: {
			title: '결제 > NH머니 이용안내', // 페이지 상단 고정
			depth2: 'NH머니',
			depth3: 'NH머니 이용안내',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MNB100000',
		meta: {
			title: '결제 > 충전하기', // 페이지 상단 고정
			depth2: '',
			depth3: '충전하기',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default payment
