<template>
  <div id="Main">
    <div v-if="isLoading === false">載入中</div>
    <template v-else>
      <music-card v-for="item in Data.songs" :key="item._id" :song="item" />
    </template>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import type { MusicDataSortList } from "@/api/Model/SongModel";

//state
const Data = ref<Object>({});
const isLoading = ref<boolean>(false);

//hooks
onMounted(() => {
  getMusicDataSortList();
  isLoading.value = true;
});
//methods
const getMusicDataSortList = async () => {
  const result = await axios.get<MusicDataSortList>(
    `${
      import.meta.env.VITE_APP_URL
    }/api/v1/songs/category/all/order/latest?page=1`
  );
  Data.value = result.data;
};
</script>
<style scoped>
#Main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
