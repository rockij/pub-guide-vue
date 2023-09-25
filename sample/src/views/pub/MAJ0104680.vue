<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="no-transition"
    class="modal-full"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title"
          >1:1 문의 프로그램 선택</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="contents">
          <div class="title-area">
            <p class="subTit-01">
              이용 중이거나 문의가 필요한 프로그램을 선택해 주세요
            </p>
          </div>
          <div class="category-area">
            <ul class="list">
              <li class="item" v-for="item in result" :key="item">
                <v-btn variant="text" block>
                  {{ item.name }}
                </v-btn>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive, computed } from 'vue'

  export default {
    props: ['modal', 'result'],
    emits: ['close'],
    setup() {
      const childern = ref([])
      const dialog = computed({
        get(val) {
          return val
        },
        set(newVal) {
          newVal = val
        }
      })
      return {
        childern,
        dialog
      }
    }
  }
</script>
