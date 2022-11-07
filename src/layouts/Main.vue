<template>
  <div id="Main">
    <music-card v-for="item in Data.songs" :key="item._id" :song="item" />
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";
import type { MusicDataSortList } from "@/api/Model/SongModel";

const Data = ref<Object>({});

onMounted(async () => {
  const result = await axios.get<MusicDataSortList>(
    "https://herokuxuanvoice.herokuapp.com/api/v1/songs/category/all/order/latest?page=1"
  );
  Data.value = result.data;
  console.log(Data.value.songs[0]);
});
</script>
<style scoped>
#Main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
