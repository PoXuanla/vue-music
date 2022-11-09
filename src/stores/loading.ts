import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {
  const loading = ref(false);

  function setLoading(bool) {
    loading.value = bool;
  }

  return { loading, setLoading };
});
