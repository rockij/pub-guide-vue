<template>
	<tr :id="props.id" v-if="props.category === true" class="menu_section_02">
		<td colspan="10">
			{{ props.meta.depth2 }}
		</td>
	</tr>
	<tr class="menu" :class="[props.end ? 'end' : '', props.meta.status]">
		<td :data-name="props.depth2Name" class="depth02">
			{{ props.meta.depth2 }}
		</td>
		<td :data-name="props.depth3Name" class="depth03">
			{{ props.meta.depth3 }}
		</td>
		<td :data-name="props.depth4Name">{{ props.meta.depth4 }}</td>
		<td :data-name="props.depth5Name">{{ props.meta.depth5 }}</td>
		<td :data-name="props.typeName" class="center">
			{{ props.type }}
		</td>
		<td :data-name="idName">
			<button type="button" @click="$emit('update')" class="link">
				{{ props.id }}
			</button>
			<a :href="props.id" target="_blank" class="win">새창</a>
		</td>
		<td class="center" :data-name="props.storyVer">
			{{ props.story }}
		</td>
		<td class="center" :data-name="props.designVer">
			{{ props.design }}
		</td>
		<td :data-name="endName" class="center end">{{ props.end }}</td>
		<td :data-name="cmtName" class="comment" v-html="props.comment"></td>
	</tr>
</template>

<script setup>
const props = defineProps({
	id: {
		type: String,
		default: null,
	},
	category: {
		type: Boolean,
		default: false,
	},
	meta: {
		status: {
			type: String,
			default: null,
		},
		depth2: {
			type: String,
			default: null,
		},
		depth3: {
			type: String,
			default: null,
		},
	},
	type: {
		type: String,
		default: null,
	},
	story: {
		type: String,
		default: null,
	},
	design: {
		type: String,
		default: null,
	},
	end: {
		type: String,
		default: null,
	},
	comment: {
		type: String,
		default: null,
	},
	depth2Name: {
		type: String,
		default: null,
	},
	depth3Name: {
		type: String,
		default: null,
	},
	depth4Name: {
		type: String,
		default: null,
	},
	depth5Name: {
		type: String,
		default: null,
	},
	typeName: {
		type: String,
		default: null,
	},
	idName: {
		type: String,
		default: null,
	},
	storyVer: {
		type: String,
		default: null,
	},
	designVer: {
		type: String,
		default: null,
	},
	endName: {
		type: String,
		default: null,
	},
	cmtName: {
		type: String,
		default: null,
	},
})
defineEmits(['update'])
</script>

<style lang="scss" scoped></style>
