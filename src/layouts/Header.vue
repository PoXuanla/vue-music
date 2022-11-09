<template>
  <div id="header">
    <div class="title"><RouterLink to="/">VueMusic</RouterLink></div>
    <el-dropdown trigger="click">
      <el-avatar
        :size="30"
        :src="UserStore.userInform.image"
        class="header-picture"
      />
      <template #dropdown v-if="Object.keys(UserStore.userInform).length === 0">
        <el-dropdown-menu>
          <el-dropdown-item @click="router.push({ name: 'login' })"
            >登入</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
      <template #dropdown v-else>
        <el-dropdown-menu>
          <el-dropdown-item
            @click="
              router.push({
                name: 'personFile',
                params: { account: UserStore.userInform.account },
              })
            "
            >個人檔案</el-dropdown-item
          >
          <el-dropdown-item @click="router.push({ name: 'manage' })"
            >管理歌曲</el-dropdown-item
          >
          <el-dropdown-item @click="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
const UserStore = useUserStore();

const { userInform } = storeToRefs(UserStore);
//methods
const logout = (): void => {
  router.push({ name: "login" });
  userInform.value = {};
  localStorage.removeItem("token");
  // UserStore.$patch((state) => {
  //   state.userInform = {};
  // });
};
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}
.container {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-picture {
  cursor: pointer;
}
.title {
  cursor: pointer;
}
</style>
