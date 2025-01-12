<template>
	<main id="content">
		<RouterLink to="/">link text(custom)</RouterLink>

		<br /><br />

		<VLink to="/" :color="'primary'" :height="'sm'" :variant="'back'" :read="true"
			><span>링크</span><span>초점</span><span>이동테스트</span></VLink
		>

		<br /><br />

		<VBtn :variant="'text'">button text(custom)</VBtn>

		<br /><br />

		<VBtn>
			<template #iconPrepend>
				<VIcon :width="24" :height="24" :bgName="'close'" />
			</template>
			<template #iconAppend>
				<VIcon :width="24" :height="24" :bgName="'close'" />
			</template>
			icon button
		</VBtn>

		<br /><br />

		<VBtn :variant="'icon'" aria-label="버튼역할">
			<VIcon :width="24" :height="24" :bgName="'close'" />
		</VBtn>

		<br /><br />

		<VBtn :color="'primary'" :height="'xs'" :variant="'back'">primary, xs, back</VBtn>

		<br /><br />

		<VBtn :color="'primary'" :height="'sm'" :variant="'back'">primary, sm, back</VBtn>

		<br /><br />

		<VBtn :color="'primary'" :height="'m'" :variant="'back'">primary, m, back</VBtn>

		<br /><br />

		<VBtn :color="'primary'" :height="'lg'" :variant="'back'">primary, lg, back</VBtn>

		<br /><br />

		<VBtn :color="'primary'" :height="'lg'" :block="true" :variant="'back'"
			>primary, lg, back</VBtn
		>

		<br /><br />

		<VBtn :color="'primary'" :height="'xl'" :variant="'back'">primary,xl, back</VBtn>

		<br /><br />

		<VBtn :color="'primary'" :height="'xl'" :variant="'back'" :ripple="true"
			>primary,xl, back, ripple</VBtn
		>

		<br /><br />

		<VBtn :color="'primary'" :height="'m'" :variant="'outline'">primary, outline</VBtn>

		<br /><br />

		<VBtn :color="'cancel'" :height="'m'" :variant="'back'">cancel, back</VBtn>

		<br /><br />

		<VBtn :color="'cancel'" :height="'m'" :variant="'outline'">cancel, outline</VBtn>

		<br /><br />

		<VBtn disabled :height="'lg'">disabled, lg</VBtn>

		<br /><br />
	</main>
</template>

<script setup>
import VIcon from '@/publish/components/VIcon.vue'
import VBtn from '@/publish/components/VButton.vue'
import VLink from '@/publish/components/VLink.vue'
</script>

<style lang="scss" scoped>
main {
	padding: 30px 20px;
}
</style>
