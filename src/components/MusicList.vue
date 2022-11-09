<template>
  <div class="musicList">
    <el-avatar shape="square" :size="30" :src="props.song.image" />
    <div class="intro">
      <h5>{{ props.song.name }}</h5>
      <span>{{ props.song.author.name }}</span>
    </div>
    <div class="card-tool">
      <el-button @click="playMusic">
        <span class="material-symbols-outlined"> play_circle </span>
      </el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { toRef } from "vue";
import { usePlayerStore } from "@/stores/player";
import { defineProps } from "vue";
import type { MusicListPropsModel } from "@/api/Model/MusicListModel";

//pinia
const playerStore = usePlayerStore();

//props
const props = defineProps<{
  song: MusicListPropsModel;
}>();
const song = toRef(props, "song");

//methods
const playMusic = () => {
  playerStore.setMusic(song.value);
  playerStore.setIsPlay(true);
  playerStore.$patch({ isShow: true });
};
</script>
<style scoped>
.musicList {
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
