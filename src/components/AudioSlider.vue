<template>
  <input
    type="range"
    name="slider"
    id=""
    :min="0"
    :max="songTime"
    :value="actualSongTime"
    @input="updateTimeSong"
    class="bg-gray-300 h-3 mt-1 ml-1 rounded-full cursor-pointer accent-[#1ea914]"
  />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["songTime", "actualSongTime"]),
  },

  methods: {
    updateTimeSong(event) {
      this.modifySongTime(event.target.value);
    },
    ...mapMutations(["modifySongTime"]),
  },
  watch: {
    songTime(newSongTime) {
      if (newSongTime < this.actualSongTime) {
        this.modifySongTime(newSongTime);
      }
    },
  },
};
</script>
