/*
	[ depth1: 내정보관리 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const myinfo = [
	{
		path: '/MainView',
		id: 'CLB200000',
		category: true,
		meta: {
			title: '내정보 관리 > 회원정보조회/변경', // 페이지 상단 고정
			depth2: '내정보관리',
			depth3: '회원정보조회/변경',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'CLB200000',
		meta: {
			title: '내정보 관리 > 영문주소관리', // 페이지 상단 고정
			depth2: '',
			depth3: '영문주소관리',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default myinfo
