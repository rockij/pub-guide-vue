<template>
	<h2>이미지 패스워드</h2>
	<div class="textfield__underline textfield__pwimg -digits2"></div>

	<h2>type: text, 입력길이 체크</h2>
	<VTextfield
		class="textfield__underline"
		:block="true"
		:id="'inputlength'"
		:placeholder="'입력길이체크'"
		:max-length="inputLengthMax"
		aria-describedby="inputlengthMsg"
		v-model="inputLengthCheck" />
	<p class="textfield__msg" aria-hidden="true">{{ inputLengthCount }} / {{ inputLengthMax }}</p>
	<p class="blind" aria-atomic="true" :aria-live="inputlengthLive" id="inputlengthMsg">
		{{ inputLengthCount }} / {{ inputLengthMax }}
	</p>

	<h2>type: textarea, 입력길이 체크</h2>
	<VTextarea
		:class="'textfield__boxline'"
		:id="'textarealength'"
		:placeholder="'입력길이체크'"
		:max-length="textareaLengthMax"
		aria-describedby="textarealengthMsg"
		v-model="textareaLengthCheck" />
	<p class="textfield__msg" aria-hidden="true">
		{{ textareaLengthCount }} / {{ textareaLengthMax }}
	</p>
	<p class="blind" aria-atomic="true" :aria-live="textarealengthLive" id="calcuateMsg">
		{{ textareaLengthCount }} / {{ textareaLengthMax }}
	</p>

	<h2>type: text, delete버튼없음</h2>
	<VTextfield
		class="textfield__underline"
		:block="true"
		:id="'field1'"
		:placeholder="'입력해주세요'"
		:delete="false"
		v-model="textInput1"
		@focus="inputFocus"
		@blur="inputBlur" />

	<h2>type: text, 오류</h2>
	<VTextfield
		class="textfield__underline error"
		:block="true"
		:id="'field11'"
		:placeholder="'입력해주세요'"
		:aria-labelledby="'error-msg'"
		v-model="textInput11"
		@focus="inputFocus"
		@blur="inputBlur" />
	<p id="error-msg" class="textfield__msg error">오류 메시지 노출</p>

	<h2>type: text, readonly</h2>
	<VTextfield
		class="textfield__underline"
		:block="true"
		:id="'field12'"
		:placeholder="'입력해주세요'"
		:readonly="true"
		v-model="textInput12" />

	<h2>type: text, disabled</h2>
	<VTextfield
		class="textfield__underline"
		:block="true"
		:id="'field15'"
		:placeholder="'입력해주세요'"
		:disabled="true"
		v-model="textInput15" />

	<h2>type: text, 좌측에 따로 타이틀이 있는 경우</h2>
	<div class="fieldset__bside">
		<strong id="title" class="stit">기본입력</strong>
		<VTextfield
			class="textfield__underline"
			:block="true"
			:placeholder="'입력해주세요'"
			:id="'field6'"
			:aria-labelledby="'title'"
			v-model="textInput6" />
	</div>

	<h2>type: text, 단위</h2>
	<VTextfield
		class="textfield__underline"
		:placeholder="'입력해주세요'"
		:id="'field8'"
		:block="true"
		v-model="textInput8">
		<template #option1> <span class="text_unit">원</span> </template>
		<template #option2> <span class="text_unit">KRW</span> </template>
	</VTextfield>

	<h2>type: text, 우측정렬</h2>
	<VTextfield
		class="textfield__underline textfield__align_right"
		:placeholder="'입력해주세요'"
		:id="'field7'"
		:block="true"
		v-model="textInput7">
		<template #option2> <span class="text_unit">%</span> </template>
	</VTextfield>

	<h2>type: text, 우측추가 컨텐츠</h2>
	<VTextfield
		class="textfield__underline"
		:placeholder="'검색해주세요'"
		:id="'field2'"
		:block="true"
		v-model="textInput2">
		<template #option1>
			<VBtn :variant="'icon'" class="btn_event">
				<VIcon :width="24" :height="24" :bgName="'glass'" />
			</VBtn>
			<VBtn :color="'primary'" :height="'xs'" :variant="'outline'"> 중복확인</VBtn>
		</template>
	</VTextfield>

	<h2>type: tel</h2>
	<VTextfield
		class="textfield__underline"
		:type="'tel'"
		:placeholder="'숫자 입력해주세요'"
		:id="'field3'"
		v-model="textInput3" />

	<h2>type: number</h2>
	<VTextfield
		class="textfield__underline"
		:type="'number'"
		:placeholder="'숫자 입력해주세요'"
		:id="'field4'"
		v-model="textInput4" />

	<h2>type: password</h2>
	<VTextfield
		class="textfield__underline"
		:type="'password'"
		:placeholder="'비밀번호 입력해주세요'"
		:id="'field5'"
		:block="true"
		v-model="textInput5" />

	<h2>type: password, 실시간오류</h2>
	<!-- [D] 오류가 발생하면 실시간으로 충족되지 못한 조건의 문구를 aria-live="assertive" 속성을 가진 노드 안에도 'textfield__msg' 와 동일하게 실시간으로 추가 -->
	<VTextfield
		class="textfield__underline"
		:type="'password'"
		:placeholder="'비밀번호 입력해주세요'"
		:id="'field16'"
		:block="true"
		v-model="textInput16" />
	<div aria-live="assertive" class="blind">
		영문/숫자/특수문자 2가지 이상 조합(8~20자), 3개 이상 연속되거나 동일한 문자/숫자 제외,
		아이디(이메일) 제외
	</div>
	<div aria-hidden="true" class="textfield__msg error">
		<p>영문/숫자/특수문자 2가지 이상 조합 (8~20자)</p>
		<p>3개 이상 연속되거나 동일한 문자/숫자 제외</p>
		<p>아이디(이메일) 제외</p>
	</div>

	<h2>주민등록번호</h2>
	<div class="fieldset__bside">
		<strong id="jumin" class="stit">주민등록번호</strong>
		<div class="textfield__underline textfield__multi_jumin">
			<VTextfield
				:placeholder="'생년월일6자리'"
				:id="'field9'"
				:name="'juminNumber'"
				:aria-labelledby="'jumin'"
				v-model="textInput9" />
			<span>-</span>
			<VTextfield
				:type="'password'"
				:placeholder="'주민번호뒷자리'"
				:id="'field10'"
				:name="'juminNumber'"
				:aria-labelledby="'jumin'"
				v-model="textInput10" />
		</div>
	</div>

	<h2>주민등록번호, disabled</h2>
	<div class="fieldset__bside">
		<strong id="jumin2" class="stit">주민등록번호</strong>
		<div class="textfield__underline textfield__multi_jumin disabled">
			<VTextfield
				:placeholder="'생년월일6자리'"
				:id="'field13'"
				:aria-labelledby="'jumin2'"
				:disabled="true" />
			<span>-</span>
			<VTextfield
				:type="'password'"
				:placeholder="'주민번호뒷자리'"
				:id="'field14'"
				:aria-labelledby="'jumin2'"
				:disabled="true" />
		</div>
	</div>

	<h2>휴대폰번호, label이 없는경우</h2>
	<div class="textfield__underline textfield__multi_hp">
		<VTextfield :type="'tel'" :id="'hp1'" :title="'휴대폰번호 앞자기'" v-model="hpInput1" />
		<span>-</span>
		<VTextfield :type="'tel'" :id="'hp2'" :title="'휴대폰번호 중간자리'" v-model="hpInput2" />
		<span>-</span>
		<VTextfield :type="'tel'" :id="'hp3'" :title="'휴대폰번호 끝자리'" v-model="hpInput3" />
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import VIcon from '@/publish/components/VIcon.vue'
import VBtn from '@/publish/components/VButton.vue'
import VTextfield from '@/publish/components/VTextfield.vue'
import VTextarea from '@/publish/components/VTextarea.vue'

const inputFocus = () => {
	console.log('focus')
}
const inputBlur = () => {
	console.log('blur')
}

const textInput1 = ref('입력했어요')
const textInput2 = ref()
const textInput3 = ref()
const textInput4 = ref()
const textInput5 = ref()
const textInput6 = ref()
const textInput7 = ref()
const textInput8 = ref()
const textInput9 = ref()
const textInput10 = ref()
const textInput11 = ref()
const textInput12 = ref('입력했어요')
const textInput15 = ref('입력했어요')
const textInput16 = ref()

const hpInput1 = ref()
const hpInput2 = ref()
const hpInput3 = ref()

const inputLengthMax = ref(20)
const inputLengthCheck = ref('입력길이체크')
const inputLengthCount = computed(() => {
	return inputLengthCheck.value.length
})
const inputlengthLive = computed(() => {
	if (inputLengthCheck.value.length % 10 === 0) {
		return 'polite'
	} else {
		return 'off'
	}
})

const textareaLengthMax = ref(200)
const textareaLengthCheck = ref('')
const textareaLengthCount = computed(() => {
	return textareaLengthCheck.value.length
})
const textarealengthLive = computed(() => {
	if (textareaLengthCheck.value.length % 10 === 0) {
		return 'polite'
	} else {
		return 'off'
	}
})
</script>

<style lang="scss" scoped>
main {
	padding: 30px 20px;
}
h2 {
	font-weight: 600;
	&:not(:first-child) {
		margin-top: 30px;
	}
}
</style>
