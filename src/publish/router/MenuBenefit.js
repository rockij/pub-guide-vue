/*
	[ depth1: 혜택 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const benefit = [
	{
		path: '/MainView',
		id: 'MNB100000',
		meta: {
			title: '혜택 > 메인', // 페이지 상단 고정
			depth2: '메인',
			depth3: '',
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
			title: '혜택 > MY혜택한눈에보기', // 페이지 상단 고정
			depth2: '내가 받은 혜택',
			depth3: 'MY혜택한눈에보기',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MNB100000',
		meta: {
			title: '혜택 > 혜택 상세내역', // 페이지 상단 고정
			depth2: '',
			depth3: '혜택 상세내역',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default benefit
