<template>
  <div id="login">
    <form class="login-form" @submit="onSubmit">
      <div class="form-input-group">
        <div class="form-input">
          <span>Account</span>
          <el-input v-model="account" placeholder="Account" name="account" />
        </div>
        <div>
          <span>Password</span>
          <el-input v-model="password" placeholder="Password" name="password" />
        </div>
      </div>
      <button class="form-button" type="submit">登入</button>
    </form>
    <alert-modal
      :showModal="showModal"
      @onClose="closeModal"
      @onConfirm="closeModal"
      title="錯誤提示"
      :content="loginErrMsg"
    ></alert-modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import useLoginValid from "@/hooks/useLoginValid";

//state
const showModal = ref<boolean>(false);
const loginErrMsg = ref<string>("");

//hooks
const { account, password, handleSubmit } = useLoginValid();

//method

const onInvalidSubmit = ({ errors }): void => {
  console.log(JSON.stringify(errors));
  loginErrMsg.value = JSON.stringify(errors);
  showModal.value = true;
};

const onSubmit = handleSubmit((values) => {
  console.log(values);
}, onInvalidSubmit);

const closeModal = (): void => {
  showModal.value = false;
};
</script>
<style>
#login {
  /* header width & border 、layout padding */
  height: calc(100vh - 60px - 1px - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -150px;
}
.form-button {
  width: 50%;
  border-radius: 10px;
  background-color: aliceblue;
  border: none;
  padding: 5px;
  cursor: pointer;
}
.form-input-group {
  margin-bottom: 20px;
}
.form-input {
  position: relative;
}
</style>
