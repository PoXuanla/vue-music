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
      <el-button
        type="danger"
        class="error-msg-box"
        v-show="loginErrMsg.length > 0"
        >{{ loginErrMsg }}</el-button
      >

      <button class="form-button" type="submit" :disabled="isLoading">
        {{ isLoading ? "登入中" : "登入" }}
      </button>
    </form>
    <alert-modal
      :showModal="showModal"
      @onClose="closeModal"
      @onConfirm="closeModal"
      title="錯誤提示"
      :content="validErrMsg"
    ></alert-modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import useLoginValid from "@/hooks/useLoginValid";
import axios from "axios";

// pinia
const user = useUserStore();
//state
const showModal = ref<boolean>(false);
const validErrMsg = ref<string>("");
const loginErrMsg = ref<string>("");
const isLoading = ref<boolean>(false);
//hooks
const { account, password, handleSubmit } = useLoginValid();

//method
const onInvalidSubmit = ({ errors }): void => {
  console.log(JSON.stringify(errors));
  validErrMsg.value = JSON.stringify(errors);
  showModal.value = true;
};

const onSubmit = handleSubmit((values) => {
  isLoading.value = true;
  login(values);
}, onInvalidSubmit);
interface LoginModel {
  status: string;
  message: string;
  user?: {};
}
const login = async (values: object): Promise<void> => {
  const { data } = await axios.post<LoginModel>(
    "https://herokuxuanvoice.herokuapp.com/api/v1/users/login",
    values,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  if (data.status === "failed") {
    loginErrMsg.value = data.message;
  } else {
    user.setUserInform(data.user);
  }
  isLoading.value = false;

  console.log(data);
};

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
  border-radius: 5px;
  background-color: royalblue;
  color: aliceblue;
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
.error-msg-box {
  margin: 15px 0;
}
</style>
