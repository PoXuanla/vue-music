<template>
  <vue-final-modal
    v-model="showModal"
    classes="container"
    content-class="content"
    @click-outside="clickOutSide"
  >
    <div class="modal-header">{{ props.title }}</div>
    <div class="modal-content">{{ props.content }}</div>
    <div class="modal-footer">
      <el-button @click="onConfirm">確認</el-button>
    </div>
  </vue-final-modal>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

//define
const props = defineProps({
  showModal: Boolean,
  title: String,
  content: String,
});
const emit = defineEmits(["onClose", "onConfirm"]);

//state
const showModal = ref<boolean>(props.showModal);

//watch
watchEffect(() => (showModal.value = props.showModal));

//methods
const clickOutSide = (): void => {
  emit("onClose");
};
const onConfirm = (): void => {
  emit("onConfirm");
};
</script>
<style scoped>
::v-deep(.container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep(.content) {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  width: 40%;
  margin: 0 1rem;
  margin-top: -200px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal-header {
  border-bottom: 1px solid darkgray;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
.modal-footer {
  display: flex;
  justify-content: right;
}
</style>
