<template>
  <v-card variant="flat" rounded="xl" class="card-report">
    <v-card-title>
      <div class="d-flex align-center">
        <div class="text-date"><slot name="date">날짜</slot></div>
        <v-chip label size="small" class="chip-default ml-2">
          <slot name="state">상태</slot>
        </v-chip>
      </div>
      <slot name="btn"></slot>
    </v-card-title>
    <v-card-item>
      <slot name="content">내용</slot>
    </v-card-item>
  </v-card>
</template>

<script>
  export default {
    props: ['title'],
    setup() {
      return {}
    }
  }
</script>
