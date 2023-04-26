<template>
  <div class="relative select-none">
    <div
      class="fixed z-50 bg-black w-[calc(100%-240px)] right-0 bottom-0 h-[80px]"
    >
      <div class="flex justify-start items-center">
        <img :src="getCover" width="50" class="mt-4 ml-3" alt="" />
        <ul class="w-52 mt-2 text-left ml-3">
          <li class="text-sm text-[#1ea914]">{{ getTrack }}</li>
          <li class="text-xs text-[#2f8d29]">{{ getArtist }}</li>
        </ul>
      </div>

      <div class="flex -mt-12 items-center justify-center">
        <previous-song
          class="mr-5 cursor-pointer"
          @click="this.previousSong(Information)"
        ></previous-song>

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

        <next-song-icon
          class="ml-5 cursor-pointer"
          @click="this.nextSong(Information)"
        ></next-song-icon>
      </div>
      <div class="flex items-center justify-center text-xs text-white">
        <span class="mt-0.5 mr-0.5">00:00</span>
        <audio-slider-vue v-if="getAudioLength[1] !== '00'" class="mr-1" />
        <div v-else class="mr-14"></div>
        <span>{{ getAudioLength[0] }}:{{ getAudioLength[1] }}</span>
      </div>

      <div class="flex justify-end items-center -mt-5">
        <div v-if="playingStatus">
          <div v-if="getVolume !== 0" class="flex flex-row ml-8 mr-3">
            <the-unmuted @click="muteAudio" class="" />
            <volume-slider />
          </div>

          <the-muted @click="unmuteAudio" class="mr-36" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NextSongIcon from "../../public/icons/NextSongIcon.vue";
import PreviousSong from "../../public/icons/PreviousSong.vue";

import Information from "../artist.json";
import ThePlayer from "../../public/icons/ThePlayer.vue";
import ThePause from "../../public/icons/ThePause.vue";

import TheMuted from "../../public/icons/TheMuted.vue";
import TheUnmuted from "../../public/icons/TheUnmuted.vue";

import { mapGetters, mapMutations } from "vuex";
import AudioSliderVue from "./AudioSlider.vue";
import VolumeSlider from "./VolumeSlider.vue";

export default {
  data() {
    return {
      Information: Information,
    };
  },

  components: {
    ThePlayer,
    AudioSliderVue,
    ThePause,
    PreviousSong,
    NextSongIcon,
    TheMuted,
    TheUnmuted,
    VolumeSlider,
  },

  computed: {
    ...mapGetters([
      "playingStatus",
      "getCover",
      "getArtist",
      "getTrack",
      "getVolume",
      "getAudioLength",
    ]),
  },

  methods: {
    ...mapMutations([
      "pauseMusicGeneral",
      "playFirstSong",
      "nextSong",
      "previousSong",
      "setAlbumInfo",
      "muteAudio",
      "unmuteAudio",
    ]),
  },
};
</script>

<style></style>
