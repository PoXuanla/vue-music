<template>
  <div class="player">
    <el-avatar
      :size="30"
      class="header-picture"
      :src="playerStore.music.data.image"
    />
    <div>{{ playerStore.music.data.name }}</div>
    <el-button type="" @click="togglePlay">
      <span
        class="material-symbols-outlined"
        v-if="playerStore.isPlay === false"
      >
        play_circle
      </span>
      <span class="material-symbols-outlined" v-else> pause </span>
    </el-button>
  </div>
</template>
<script setup lang="ts">
import { usePlayerStore } from "@/stores/player";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

//pinia
const playerStore = usePlayerStore();
const { isPlay, music } = storeToRefs(playerStore);

//state
const player = ref(new Audio());

//播放/暫停 控制
watch(isPlay, () => {
  console.log(isPlay.value);
  if (isPlay.value) player.value.play();
  else player.value.pause();
});
//監聽歌曲切換
watch(
  music,
  (newMusic) => {
    player.value.src = newMusic.data.mp3;
    player.value.play();
    console.log(newMusic.data.mp3);
  },
  { deep: true }
);
//method
const togglePlay = () => {
  playerStore.setIsPlay(!playerStore.isPlay);
};
</script>
<style scoped>
.player {
  display: flex;
  width: 300px;
  height: 50px;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  right: 0px;
  border: 1px solid black;
}
</style>
