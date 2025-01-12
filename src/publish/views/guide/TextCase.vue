<template>
	<strong>말줄임</strong><br />
	<p class="test_text_overflow1">
		말줄임한줄입니다말줄임한줄입니다말줄임한줄입니다말줄임한줄입니다
	</p>
	<div class="test_text_overflow1_wrap">
		<p class="test_text_overflow1">
			우측에아이콘이 있는 핝눌 말줄임 우측에아이콘이 있는 핝눌 말줄임
		</p>
		<span class="option_el">아이콘</span>
	</div>
	<p class="test_text_overflow2">
		두줄말줄임입니다.두줄말줄임입니다.두줄말줄임입니다.두줄말줄임입니다.두줄말줄임입니다.
		두줄말줄임입니다. 두줄말줄임입니다.
	</p>

	<br />

	<TextCounter :startAmount="0" :endAmount="2000" :duration="3" :autoinit="true" />
</template>

<script setup>
import TextCounter from 'vue3-autocounter'
</script>
