const components = [
	{
		path: '/ButtonCase',
		id: 'ButtonCase',
		meta: {
			title: '버튼', // 페이지 상단 고정
		},
		component: () => import('@/publish/views/components/ButtonCase.vue'),
	},
	{
		path: '/DialogCase',
		id: 'DialogCase',
		meta: {
			title: '팝업', // 페이지 상단 고정
		},
		component: () => import('@/publish/views/components/DialogCase.vue'),
	},
	{
		path: '/ExpansionCase',
		id: 'ExpansionCase',
		meta: {
			title: '확장', // 페이지 상단 고정
		},
		component: () => import('@/publish/views/components/ExpansionCase.vue'),
	},
	{
		path: '/TextfieldCase',
		id: 'TextfieldCase',
		meta: {
			title: '입력', // 페이지 상단 고정
		},
		component: () => import('@/publish/views/components/TextfieldCase.vue'),
	},
	{
		path: '/SlideCase',
		id: 'SlideCase',
		meta: {
			title: '슬라이드 vue3-carousel', // 페이지 상단 고정
		},
		component: () => import('@/publish/views/components/SlideCase.vue'),
	},
	{
		path: '/SlideCase2',
		id: 'SlideCase2',
		meta: {
			title: '슬라이드 @egjs-flicking', // 페이지 상단 고정
		},
		component: () => import('@/publish/views/components/SlideCase2.vue'),
	},
	{
		path: '/ImageLoading',
		id: 'ImageLoading',
		meta: {
			title: '이미지 로딩', // 페이지 상단 고정
		},
		component: () => import('@/publish/views/components/ImageLoading.vue'),
	},
	{
		path: '/ScrollSectionView',
		id: 'ScrollSectionView',
		meta: {
			title: '스크롤중 영역 실행', // 페이지 상단 고정
		},
		component: () => import('@/publish/views/components/ScrollSectionView.vue'),
	},
]

export default components
