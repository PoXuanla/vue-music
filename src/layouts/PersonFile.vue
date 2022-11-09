<template>
  <div class="container">
    <template v-if="Object.keys(inform).length === 0">
      <div v-if="loadStore.loading">isLoading...</div>
      <div v-else>No User</div>
    </template>
    <template v-else>
      <div class="author">
        <h1>Author</h1>
        <el-avatar shape="square" :size="30" :src="inform.image" />
      </div>
      <div class="intro">
        <h1>Intro</h1>
        <p>{{ inform.intro }}</p>
      </div>
      <div class="music">
        <h1>Music</h1>
        <music-list v-for="song in inform.songs" :key="song._id" :song="song" />
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useLoadingStore } from "@/stores/loading";
const loadStore = useLoadingStore();
//route
const route = useRoute();
const account = route.params.account;

//state
const inform = ref({});

//hooks
onMounted(() => {
  getUSerInform();
});
//methods
const getUSerInform = async () => {
  loadStore.setLoading(true);

  const { data } = await axios.get<any>(
    `${import.meta.env.VITE_APP_URL}/api/v1/users/userInform/${account}`
  );
  if (data.status === "failed") {
    loadStore.setLoading(false);
    return;
  }
  inform.value = data.inform;
  loadStore.setLoading(false);
};
</script>
<style scoped>
.author {
  text-align: center;
}
.intro {
  text-align: center;
}
.music {
  text-align: center;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
