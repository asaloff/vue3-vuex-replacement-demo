import { reactive, computed, readonly, watch } from "vue";

const state = reactive({
  number: 1,
  double: computed(() => state.number * 2),
})

function increment() {
  state.number++;
}

watch(state, () => {window.rootState = readonly({ ...state })}, { deep: true, immediate: true })

export default readonly({
  state,
  increment
});
