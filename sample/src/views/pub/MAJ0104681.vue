<template>
  <div class="contents">
    <div class="title-area pt-1">
      <p class="subTit-01">테라젠 프로그램 문의</p>
      <p class="desc pt-4">
        진행 중인 프로그램에 관한 문의를 남겨 주시면 신속하게 도와드릴게요!
      </p>
    </div>

    <div class="textfield-area">
      <v-text-field
        class="input-basic textfield-default"
        label="제목"
        v-model="name"
        required
        persistent-placeholder
        variant="outlined"
        clearable
      >
      </v-text-field>
      <v-textarea
        class="textarea-basic textfield-default pt-4"
        placeholder="내용"
        persistent-counter
        v-model="name2"
        :maxlength="1000"
        :counter="20"
        variant="outlined"
        no-resize
      ></v-textarea>
    </div>
    <div class="attach-area">
      <v-btn variant="text" height="40" class="attach-btn ws-94" block
        >사진첨부<v-icon class="pl-1">mdi-plus</v-icon>
      </v-btn>
      <v-chip
        v-if="chip"
        class="file-chip mt-4"
        closable
        @click:close="chip = false"
      >
        IMG_1234.png
      </v-chip>

      <div class="smDesc d-flex">
        <v-avatar color="#cccccc" size="16"
          ><span class="text-white" style="font-size: 8px">!</span></v-avatar
        >
        <span class="text">
          개인정보가 포함되지 않도록 주의해 주세요 <br />
          사진첨부는 10MB까지 1개만 등록 가능합니다
        </span>
      </div>
    </div>
    <div class="section-page section-write"></div>
    <div class="checkbox-area">
      <v-checkbox
        v-model="checkedItem"
        :value="item.id"
        v-for="item in agreeItems"
        :key="item.id"
        class="checked-agree"
      >
        <template v-slot:label
          >{{ item.text }}
          <v-spacer></v-spacer>
          <a target="_blank" href="https://vuetifyjs.com" @click.stop>
            <v-icon>mdi-chevron-right</v-icon></a
          >
        </template>
      </v-checkbox>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn
          variant="text"
          height="56px"
          class="btn-summit"
          :disabled="name2.length === 0"
          >등록하기</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue'
  export default {
    setup() {
      const name = ref('건강검진 연동이 되지 않아요')
      const name2 = ref(
        '인증까지 완료했는데, 건강검진 정보가 연동이 되지 않아요.'
      )
      const checkedItem = ref([])
      const chip = ref(true)

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
      return {
        name,
        name2,
        checkedItem,
        agreeItems,
        chip
      }
    }
  }
</script>
