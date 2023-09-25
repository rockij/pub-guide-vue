<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">증상을 알려주세요</p>
    </div>
    <div class="chatting-content mt-7">
      <div class="logo-dot"></div>
      <div class="loading-dot"><span class="dot"></span></div>
      <div class="sentence">김매디님, 안녕하세요</div>
      <div class="sentence">
        <strong class="title">2차부위에 증상이 나타나고 있나요?</strong>
        지금부터 드리는 몇가지 질문을 읽으시고 해당되는 답을 체크해 주세요.
        질문이 끝나면 어떤 조치가 필요한지 알려드립니다.
      </div>
      <div class="sentence">2차부위에 어떤 증상이 있는지 선택하세요.</div>
      <div class="qna-area">
        <div role="tablit" class="tabs-simple2">
          <v-btn
            variant="text"
            role="tab"
            :aria-selected="qnaBtn === btn.value ? 'true' : 'false'"
            v-for="btn in qnaBtns"
            :key="btn.value"
            @click="qnaSelected(btn.value)"
            >{{ btn.q }}</v-btn
          >
        </div>
        <div class="ansbox">
          <p
            class="sentence"
            v-for="btn in qnaBtns"
            :class="qnaBtn === btn.value ? 'on' : ''"
            :key="btn.value"
            @click="qnaSelected(btn.value)"
          >
            {{ btn.a }}
          </p>
        </div>
      </div>
      <div class="logo-dot"></div>
      <div class="sentence">마지막 질문입니다.</div>
      <div class="sentence">마지막 질문은 다른 형식으로 노출됩니다</div>
      <div class="qna-area">
        <div role="tablit" class="tabs-simple2">
          <v-btn
            variant="text"
            role="tab"
            :aria-selected="qna2Btn === btn.value ? 'true' : 'false'"
            v-for="btn in qna2Btns"
            :key="btn.value"
            @click="qna2Selected(btn.value)"
            >{{ btn.text }}</v-btn
          >
        </div>
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit">결과보기</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      document.body.style.backgroundColor = '#EFF4F6'

      const qnaBtn = ref()
      const qna2Btn = ref()
      const qnaBtns = ref([
        {
          value: 1,
          q: '콧물/코막힘',
          a: '코막힘 증상이 있어요'
        },
        {
          value: 2,
          q: '코피',
          a: '코피 증상이 있어요'
        }
      ])
      const qna2Btns = ref([
        {
          value: 1,
          text: '네'
        },
        {
          value: 2,
          text: '아니오'
        }
      ])
      function qnaSelected(val) {
        qnaBtn.value = val
      }
      function qna2Selected(val) {
        qna2Btn.value = val
      }
      return {
        qnaBtn,
        qnaBtns,
        qna2Btn,
        qna2Btns,
        qnaSelected,
        qna2Selected
      }
    },
    beforeUnmount() {
      document.body.style.backgroundColor = ''
    }
  }
</script>
