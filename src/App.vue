<template>
  <TheTopMenu />

  <the-left-menu />

  <div
    class="pb-28 bg-gradient-to-b from-gray-800 to-black overflow-auto bottom-0 fixed z-40 h-[calc(100%-60px)] w-[calc(100%-240px)] right-0"
  >
    <router-view />
  </div>

  <bottom-music-player v-if="getAlbum !== null" />
</template>

<script>
import { mapGetters } from "vuex";
import BottomMusicPlayer from "./components/BottomMusicPlayer.vue";
import TheLeftMenu from "./components/TheLeftMenu.vue";
import TheTopMenu from "./components/TheTopMenu.vue";

export default {
  components: { TheTopMenu, TheLeftMenu, BottomMusicPlayer },
  computed: {
    ...mapGetters(["getAlbum"]),
  },
};
</script>
