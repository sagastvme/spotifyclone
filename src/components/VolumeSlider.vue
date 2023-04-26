<template>
  <input
    @input="test"
    type="range"
    name=""
    id=""
    min="0"
    max="100"
    class="bg-gray-300 h-3 mt-1 ml-1 rounded-full w-full cursor-pointer accent-[#1ea914]"
  />
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    test(value) {
      this.changeAudioVolume(value.srcElement.value / 100);
    },
    ...mapMutations(["changeAudioVolume"]),
  },
};
</script>

<style></style>
