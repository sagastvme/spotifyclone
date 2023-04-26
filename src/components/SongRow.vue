<template>
  <li
    class="flex items-center justify-between rounded-md hover:bg-[#2A2929]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="flex items-center w-full py-1.5">
      <div v-if="isHover" class="w-[40px] ml-[14px] mr-[6px] cursor-pointer">
        <the-player-vue
          fill="white"
          class="ml-1.5"
          @click="
            playMusic({
              audio: this.audio,
              indexPassed: this.index,
              artistPassed: artist,
              trackPassed: track.name,
            })
          "
          v-if="index !== this.getIndex"
        />

        <the-pause-vue
          class="ml-1"
          fill="#1ea914"
          @click="pauseMusic(this.index)"
          v-else
        />
      </div>
      <div v-else class="text-white font-semibold w-[40px] ml-5">
        <span v-if="index !== this.getIndex">{{ index }}</span>
        <span v-else class="text-[#1ea914]">{{ index }}</span>
      </div>
      <div>
        <div class="text-white font-semibold" v-if="index !== this.getIndex">
          {{ track.name }}
        </div>
        <div class="text-[#1ea914] font-semibold" v-else>
          {{ track.name }}
        </div>
        <div
          class="text-sm font-semibold text-gray-400"
          v-if="index !== this.getIndex"
        >
          {{ artist }}
        </div>
        <div v-else class="text-sm font-semibold text-[#2f8d29]">
          {{ artist }}
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <button v-if="isHover">
        <the-heart-vue class="mr-8" />
      </button>
      <div class="text-xs mx-9 text-white" v-else>
        <span v-if="index !== this.getIndex">{{ songTime }}</span>
        <span v-else class="text-[#1ea914]">{{ songTime }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import TheHeartVue from "../../public/icons/TheHeart.vue";
import ThePlayerVue from "../../public/icons/ThePlayer.vue";
import ThePauseVue from "../../public/icons/ThePause.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { TheHeartVue, ThePauseVue, ThePlayerVue },
  data() {
    return {
      isHover: false,
      audio: new Audio(this.track.path),
      songTime: false,

      indexSaved: this.$props.index,
    };
  },
  mounted() {
    this.getSongTime();
  },
  computed: {
    ...mapGetters(["playingStatus", "getIndex"]),
  },

  methods: {
    getSongTime() {
      this.audio.addEventListener("loadedmetadata", () => {
        const minutes = Math.floor(this.audio.duration / 60);
        const seconds = Math.floor(this.audio.duration % 60);
        this.songTime = minutes + ":" + seconds.toString().padStart(2, "0");
      });
    },

    ...mapMutations(["playMusic", "pauseMusic"]),
  },
  props: ["track", "index", "artist"],
};
</script>

<style></style>
