/*
	[ depth1: 공통 ]
	- depth1 문구 표시는 IndexView.vue 페이지 내에서 작성
	- 해당페이지는 depth2부터 작성

	* type 작성 안내 *
	- 알럿 : AP
	- 전체팝업 : FP
	- 바텀시트 : BP
	- 레이어팝업 : LP
	- 탭 : TAB
*/
const common = [
	{
		path: '/COA100000',
		id: 'COA100000',
		category: true,
		meta: {
			title: '로그인 > 결제비밀번호', // 페이지 상단 고정
			depth2: '로그인',
			depth3: '결제비밀번호',
			status: 'ing',
		},
		type: '',
		story: '0.3',
		design: '0.5',
		end: '',
		comment: `
		<p>
			코멘트
		</p>
		`,
		component: () => import('@/publish/views/common/COA100000.vue'),
	},
	{
		path: '/MainView',
		id: 'COA101000',
		meta: {
			title: '로그인 > 생체인증', // 페이지 상단 고정
			depth2: '',
			depth3: '생체인증',
			status: '',
		},
		type: '',
		story: '',
		design: '',
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'COA102000',
		meta: {
			title: '로그인 > 인증서', // 페이지 상단 고정
			depth2: '',
			depth3: '인증서',
			status: '',
		},
		type: 'FP',
		story: '',
		design: '',
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'COA200000',
		category: true,
		meta: {
			title: '인증서 > NH모바일인증서', // 페이지 상단 고정
			depth2: '인증서',
			depth3: 'NH모바일인증서',
			status: '',
		},
		type: '',
		story: '',
		design: '',
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'COA201000',
		meta: {
			title: '인증서 > 금융인증서', // 페이지 상단 고정
			depth2: '',
			depth3: '금융인증서',
			status: '',
		},
		type: '',
		story: '',
		design: '',
		end: '',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
	{
		path: '/MainView',
		id: 'COA201000',
		meta: {
			title: '인증서 > 금융인증서', // 페이지 상단 고정
			depth2: '',
			depth3: '금융인증서',
			status: '',
		},
		type: '',
		story: '',
		design: '',
		end: '2024-01-20',
		comment: ``,
		component: () => import('@/publish/views/main/MainView.vue'),
	},
]

export default common

/*
	[ STATUS 1세트 템플릿 ]
	{
		path: '/login', → 화면ID
		id: 'login', → 화면ID
		category: true, → 1뎁스일 경우 true
		meta: {
			title: '로그인', // 페이지 상단 고정 → 헤더영역 타이틀
			status: 'ing', → 작업진행중: ing, 작업완료: 빈칸 (class="ing" 자동 추가됨)
			depth2: '로그인', → 2뎁스
			depth3: '', → 3뎁스
			depth4: '', → 4뎁스
			depth5: '', → 5뎁스
		},
		type: '', → 팝업 타입, * type 작성 안내 * 참고
		story: '0.3', → 퍼블리싱작업 화면설계서버전
		design: '0.5', → 퍼블리싱작업 디자인버전
		end: '', → 완료일 (class="end" 자동 추가됨)
		comment: ``, → `` 안에 <p></p> 태그로 작성
		component: () => import('@/publish/views/prework/login.vue'), → 미리보기 영역: 화면ID
	},
*/
