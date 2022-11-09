import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", () => {
  const isShow = ref(false);
  const isPlay = ref(false);
  const music = reactive({
    data: {
      name: "",
      image: "",
      mp3: "",
    },
  });
  // methodes
  const setIsPlay = (bool) => {
    isPlay.value = bool;
    if (bool) isShow.value = true;
  };
  const setMusic = (data) => {
    music.data.name = data.name;
    music.data.image = data.image;
    music.data.mp3 = data.mp3;
  };
  return { isShow, isPlay, music, setIsPlay, setMusic };
});
