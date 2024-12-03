/*
	[ depth1: 생활편의 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const living = [
	{
		path: '/MainView',
		id: 'MNB100000',
		// category: true,
		meta: {
			title: '생활편의 > NH가득', // 페이지 상단 고정
			depth2: 'NH가득',
			depth3: '',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default living
