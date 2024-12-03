/*
	[ depth1: 이용내역 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const usedetail = [
	{
		path: '/MainView',
		id: 'CLB200000',
		category: true,
		meta: {
			title: '이용내역 > 통합지출분석', // 페이지 상단 고정
			depth2: '통합지출분석',
			depth3: '',
		},
		end: '2024-02-13',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'CLB300000',
		meta: {
			title: '이용내역 > 이용대금명세서', // 페이지 상단 고정
			depth2: '',
			depth3: '이용대금명세서',
		},
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default usedetail
