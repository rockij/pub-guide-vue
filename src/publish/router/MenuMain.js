/*
	[ depth1: 메인 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const main = [
	{
		path: '/MainView',
		id: 'MNB100000',
		category: true,
		meta: {
			title: '메인 > 홈(마이)', // 페이지 상단 고정
			depth2: '홈(마이)',
			depth3: '',
		},
		end: '2024-01-24',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MNB101000',
		meta: {
			title: '메인 > 간편모드', // 페이지 상단 고정
			depth2: '',
			depth3: '간편모드',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MNB102000',
		meta: {
			title: '메인 > 마이대시보드', // 페이지 상단 고정
			depth2: '',
			depth3: '마이대시보드',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default main
