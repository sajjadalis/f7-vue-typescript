import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0 as number,
  }),
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    increment(): void {
      this.count++;
    },
    decrement(): void {
      this.count--;
    },
  },
});
