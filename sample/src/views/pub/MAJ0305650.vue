<template>
  <div class="contents">
    <div class="title-area">
      <h1 class="subTit-01">증상 검색 대상을 선택하세요</h1>
      <v-btn variant="text" class="slink">내 증상 검색하기</v-btn>
    </div>
    <div class="d-flex tabs-target mt-6">
      <v-btn
        variant="text"
        v-for="btn in tabBtns"
        :key="btn.value"
        :class="`target${btn.value} ${tabBtn === btn.value ? 'selected' : ''}`"
        @click="tabSelected(btn.value)"
        >{{ btn.text
        }}<span class="stxt" v-if="btn.text2">{{ btn.text2 }}</span></v-btn
      >
    </div>
    <v-select
      label="관계"
      :class="`textfield-default mt-4 ${
        select.value === 0 ? 'placeholder' : ''
      }`"
      v-model="select"
      item-title="state"
      :items="selectList"
      variant="outlined"
      persistent-placeholder
    />
    <v-text-field
      class="textfield-default mt-4"
      :rules="[
        (v) => (v && v.length <= 3) || '이름을 두 글자 이상 입력해주세요'
      ]"
      label="이름"
      required
      variant="outlined"
      persistent-placeholder
      placeholder="입력해주세요."
      clearable
    ></v-text-field>
    <div class="section-page mt-8 pb-0">
      <h2 class="tit-02">증상검색 약관동의</h2>
      <div class="agree-group">
        <v-checkbox
          v-model="checkAll"
          label="전체동의"
          class="checked-agree checked-all mt-1"
        ></v-checkbox>
        <div class="agree-items mt-2">
          <v-checkbox
            v-model="checkedItem"
            :value="item.id"
            v-for="item in agreeItems"
            :key="item.id"
            class="checked-agree checked-sub"
          >
            <template v-slot:label
              >{{ item.text }}
              <v-spacer></v-spacer>
              <a
                target="_blank"
                :title="`${item.text} 약관보기`"
                href="https://vuetifyjs.com"
                @click.stop
              >
                <v-icon
              /></a>
            </template>
          </v-checkbox>
        </div>
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="buttonActive"
          >다음</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
  import { ref, reactive, computed } from 'vue'
  export default {
    data() {
      return {
        select: { state: '선택해주세요', value: 0 },
        selectList: [
          { state: '아들', value: 1 },
          { state: '딸', value: 2 }
        ]
      }
    },
    setup() {
      const tabBtn = ref()
      const tabBtns = ref([
        {
          value: 1,
          text: '소아',
          text2: '(2세~13세)'
        },
        {
          value: 2,
          text: '여자'
        },
        {
          value: 3,
          text: '남자'
        }
      ])
      function tabSelected(val) {
        tabBtn.value = val
      }

      const buttonActive = ref(true)
      const checkedItem = ref([])
      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 개인정보 수집 및 이용동의'
        },
        {
          id: 2,
          text: '[필수] 고유식별정보 처리 동의'
        }
      ])

      const checkAll = computed({
        get() {
          return checkedItem.value.length === agreeItems.length
        },
        set(value) {
          checkedItem.value = []
          if (value) {
            for (let i = 1; i <= agreeItems.length; i++) {
              checkedItem.value.push(i)
            }
          }
          if (checkedItem.value.length === agreeItems.length) {
            buttonActive.value = false
          } else {
            buttonActive.value = true
          }
        }
      })

      return {
        tabBtn,
        tabBtns,
        tabSelected,
        agreeItems,
        checkedItem,
        checkAll,
        buttonActive
      }
    }
  }
</script>
