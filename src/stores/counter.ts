import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const data = reactive({
    inform: {
      name: "11",
      data: <any>[],
    },
  });
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
    data.inform.data.push("22");
  }

  return { count, data, doubleCount, increment };
});
