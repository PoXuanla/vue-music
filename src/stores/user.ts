import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const userInform = ref({});

  const setUserInform = (data) => {
    userInform.value = data;
  };
  return { userInform, setUserInform };
});
