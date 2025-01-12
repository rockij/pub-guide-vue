<template>
	<main id="content">
		<h2>Single Animation No</h2>
		<VExpansion :id="`expanded-single`" :expanded="singleExpansion" :transition="false">
			<template #title>
				<button
					type="button"
					class="expansion__trigger"
					@click="singleExpansion = !singleExpansion">
					타이틀
				</button>
			</template>
			내용입니다
		</VExpansion>

		<h2>Expanded True fix</h2>
		<VExpansion :id="`expanded-single`" :expanded="true">
			<template #title>
				<button
					disabled
					type="button"
					class="expansion__trigger"
					@click="singleExpansion = !singleExpansion">
					타이틀
				</button>
			</template>
			내용입니다
		</VExpansion>

		<h2>Accordion</h2>
		<VExpansion
			:id="`expanded${item.value}`"
			v-for="(item, i) in accordionExpansion"
			:key="i"
			:expanded="item.expanded">
			<template #title>
				<button
					type="button"
					class="expansion__trigger"
					@click="accordionExpansionHandle(i)">
					{{ item.title }}
				</button>
			</template>
			{{ item.text }}
		</VExpansion>

		<!-- <h2>Accordion</h2>
		<VExpansion
			:id="`expanded${item.value}`"
			v-for="(item, i) in accordionExpansion"
			:key="i"
			:expanded="item.expanded">
			<template #title>
				<a
					:href="`#expanded${item.value}-title`"
					class="expansion__trigger"
					@click="accordionExpansionHandle(i)">
					{{ item.title }}
				</a>
			</template>
			{{ item.text }}
		</VExpansion> -->
	</main>
</template>

<script setup>
import { ref } from 'vue'
import VExpansion from '@/publish/components/VExpansion.vue'

const singleExpansion = ref(false)

// value값 꼭 넣어주고 0부터 시작
const accordionExpansion = ref([
	{
		value: 0,
		title: '타이틀',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias beatae sequi accusamus maiores error reprehenderit nemo eius ea exercitationem aliquam reiciendis vel facilis explicabo deserunt perspiciatis iste provident, culpa necessitatibus non, voluptatem perferendis ex deleniti quasi! Delectus dolores autem, odio labore accusamus eum? Esse nisi labore unde minima aliquam at. Repellendus harum unde tenetur! Ducimus minima labore cumque officiis commodi voluptatem totam harum! Molestiae dolore labore repudiandae cum iste, quos illum soluta reiciendis harum consequatur, velit sint tempora natus laboriosam cupiditate nulla eveniet inventore? Rerum nihil laudantium repudiandae mollitia debitis alias odio quisquam labore ipsam facilis. Sequi placeat nihil accusantium?',
		expanded: false,
	},
	{
		value: 1,
		title: '타이틀2',
		text: '내용입니다2',
		expanded: false,
	},
	{
		value: 2,
		title: '타이틀3',
		text: '내용입니다3',
		expanded: false,
	},
])
function accordionExpansionHandle(selectedIndex) {
	accordionExpansion.value.forEach((_, i) => {
		if (
			accordionExpansion.value[i].value === selectedIndex &&
			accordionExpansion.value[i].expanded === true
		) {
			accordionExpansion.value[i].expanded = false
		} else {
			accordionExpansion.value[i].value === selectedIndex
				? (accordionExpansion.value[i].expanded = true)
				: (accordionExpansion.value[i].expanded = false)
		}
	})
	document.documentElement.style.setProperty('--scroll-padding', 50 + 'px')
}
</script>

<style lang="scss" scoped>
main {
	padding: 30px 20px 1400px;
}
h2:not(:first-child) {
	margin-top: 20px;
}
</style>
