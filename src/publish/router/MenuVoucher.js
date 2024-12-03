/*
	[ depth1: 공공/바우처 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const voucher = [
	{
		path: '/MainView',
		id: 'MNB100000',
		category: true,
		meta: {
			title: '공공/바우처 > 서비스안내/신청', // 페이지 상단 고정
			depth2: '정부지원바우처',
			depth3: '서비스안내/신청',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'MNB100000',
		meta: {
			title: '공공/바우처 > 신청내역', // 페이지 상단 고정
			depth2: '',
			depth3: '신청내역',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default voucher
