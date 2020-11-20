import { reactive, computed, readonly, watch } from "vue";

const state = reactive({
  number: 1,
  double: computed(() => state.number * 2),
})

function increment() {
  state.number++;
}

watch(state, () => {window.rootState = { ...state };}, { deep: true, immediate: true })

export default readonly({
  state,
  increment
});