<template>
  <div class="p-8">
    <p class="text-white font-semibold text-2xl hover:underline cursor-pointer">
      {{ Information.name }}
    </p>
    <div class="mt-1.5 flex items-center w-full relative h-full">
      <img width="140" :src="Information.albumCover" alt="" />
      <div class="w-full ml-5">
        <div
          class="text-white absolute hover:underline cursor-pointer top-0 font-semibold"
        >
          <p class="text-[33px]">{{ Information.name }}</p>
        </div>

        <div class="text-gray-300 text-[13px] flex">
          <div class="flex">Album</div>
          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2"></div>
            <span class="-ml-0.5">{{ Information.releaseYear }}</span>
          </div>

          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2"></div>
            <span class="-ml-0.5">{{ Information.tracks.length }} songs</span>
          </div>
        </div>

        <div
          class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5"
        >
          <button
            @click="playFirstSong(Information)"
            v-if="!playingStatus"
            class="p-2.5 rounded-full bg-white"
          >
            <the-player fill="black" /></button
          ><button
            @click="pauseMusicGeneral"
            class="p-2.5 rounded-full bg-white"
            v-else
          >
            <the-pause class="h-[10px] w-[10px]" />
          </button>

          <button>
            <the-heart />
          </button>

          <button class="rounded-full">
            <three-dots />
          </button>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-between px-5 pt-2">
      <div class="flex items-center justify-between text-gray-400">
        <div class="mr-7">#</div>
        <div class="text-sm text-white">Title</div>
      </div>

      <div class="text-white">Duration</div>
    </div>

    <div class="border-b border-b-[#2A2A2A] mt-2"></div>

    <div class="mb-4"></div>

    <ul
      class="w-full"
      v-for="(track, index) in Information.tracks"
      :key="track"
    >
      <SongRow :artist="Information.name" :track="track" :index="++index" />
    </ul>
  </div>
</template>

<script>
import Information from "../artist.json";
import ThePlayer from "../../public/icons/ThePlayer.vue";

import ThePause from "../../public/icons/ThePause.vue";
import TheHeart from "../../public/icons/TheHeart.vue";
import ThreeDots from "../../public/icons/ThreeDots.vue";
import SongRow from "./SongRow.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      Information: Information,
    };
  },

  components: {
    ThePlayer,
    TheHeart,
    ThreeDots,
    SongRow,
    ThePause,
  },
  mounted() {
    this.setAlbumInfo(Information);
  },
  computed: {
    ...mapGetters(["playingStatus"]),
  },

  methods: {
    ...mapMutations([
      "pauseMusicGeneral",
      "playFirstSong",
      "nextSong",
      "previousSong",
      "setAlbumInfo",
    ]),
  },
};
</script>

<style scoped>
.circle {
  width: 4px;
  height: 4px;
  background-color: rgb(189, 189, 189);
  border-radius: 100%;
}
</style>
