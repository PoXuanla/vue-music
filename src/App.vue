<script setup lang="ts">
import { onMounted } from "vue";
import uiHeader from "@/layouts/Header.vue";
import axios from "axios";
import { useUserStore } from "./stores/user";
import MusicPlayer from "@/layouts/MusicPlayer.vue";
import { usePlayerStore } from "./stores/player";
const UserStore = useUserStore();
const PlayerStore = usePlayerStore();
const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
onMounted(async () => {
  if (token === null) return;
  const { data } = await axios.get<any>(
    `${import.meta.env.VITE_APP_URL}/api/v1/users/tokenData`,
    config
  );
  UserStore.setUserInform(data.user);
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="bb-1">
        <ui-header></ui-header>
      </el-header>
      <el-main style="margin: 0">
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
  <MusicPlayer v-show="PlayerStore.isShow"></MusicPlayer>
</template>

<style scoped>
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
</style>
