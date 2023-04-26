<template>
  <div class="fixed z-40 h-full bg-black w-[240px]">
    <div class="flex flex-col items-center justify-center mt-5 gap-8">
      <img
        src="../../public/images/icons/spotify-logo.png"
        class="w-32 mr-12"
        alt="Spotify logo"
      />
      <ul class="text-sm text-gray-400 w-full">
        <li class="hover:text-white flex flex-row mb-4">
          <router-link
            v-if="!homeC"
            :to="{ name: 'home' }"
            class="flex flex-row w-full"
            @mouseenter="hover('home')"
            @mouseleave="unhover('home')"
          >
            <img :src="home" alt="Home icon" class="w-6 ml-8" />
            <span class="ml-4">Home</span>
          </router-link>
          <div class="flex flex-row" v-else>
            <img :src="WeAreHome" alt="Home icon" class="w-6 ml-8" />
            <span class="ml-4 text-white">Home</span>
          </div>
        </li>
        <li class="hover:text-white flex flex-row mb-4">
          <router-link
            v-if="!searchC"
            @mouseenter="hover('search')"
            @mouseleave="unhover('search')"
            :to="{ name: 'search' }"
            class="w-full flex flex-row"
          >
            <img :src="search" alt="Search icon" class="w-6 ml-8" />
            <span class="ml-4">Search</span>
          </router-link>
          <div class="flex flex-row" v-else>
            <img :src="WeAreSearch" alt="Search icon" class="w-6 ml-8" />
            <span class="ml-4 text-white">Search</span>
          </div>
        </li>
        <li class="w-full hover:text-white flex flex-row mb-2">
          <router-link
            v-if="!libraryC"
            @mouseenter="hover('library')"
            @mouseleave="unhover('library')"
            :to="{ name: 'library' }"
            class="w-full flex flex-row"
          >
            <img :src="library" alt="Library icon" class="w-6 ml-8" />
            <span class="ml-4">Library</span>
          </router-link>
          <div class="flex flex-row" v-else>
            <img :src="WeAreLibrary" alt="Library icon" class="w-6 ml-8" />
            <span class="ml-4 text-white">Library</span>
          </div>
        </li>
      </ul>

      <ul class="text-sm text-gray-400 w-full">
        <li
          class="hover:text-white flex flex-row mb-4"
          @mouseenter="hover('playlist')"
          @mouseleave="unhover('playlist')"
        >
          <img :src="playlist" alt="Home icon" class="w-6 ml-8" />
          <span class="ml-4">Create a Playlist</span>
        </li>

        <li
          class="hover:text-white flex flex-row mb-4"
          @mouseenter="hover('liked')"
          @mouseleave="unhover('liked')"
        >
          <img :src="liked" alt="Liked icon" class="w-6 ml-8" />
          <span class="ml-4">Liked Songs</span>
        </li>
      </ul>
      <ul class="text-gray-400 text-xs w-full mt-32 xl:mt-80">
        <li class="ml-8 mb-4">
          <a href="#">Legal</a> <a href="#" class="ml-4">Privacy Center</a>
        </li>
        <li class="ml-8 mb-4"><a href="#">Privacy Policy</a></li>

        <li class="ml-8 mb-4">
          <a href="#">Cookie Settings</a> <a href="#" class="ml-4">About Ads</a>
        </li>
        <li class="ml-8">
          <a href="#">Cookies</a>
        </li>
      </ul>

      <div class="w- mt-3 w-full">
        <button
          class="text-sm text-gray-400 hover:text-white flex flex-row ml-6 rounded-l-full rounded-r-full px-3 py-1 border border-gray-400 hover:border-white"
        >
          <the-world class="mt-0.5 mr-0.5" /><span>English</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import HomeIcon from "../../public/images/icons/home-inactive.png";
import HomeInactive from "../../public/images/icons/home-inactive-hover.png";
import WeAreHome from "../../public/images/icons/home-active.png";

import SearchIcon from "../../public/images/icons/search-inactive.png";
import SearchInactive from "../../public/images/icons/search-inactive-hover.png";
import WeAreSearch from "../../public/images/icons/search-active.png";

import LibraryIcon from "../../public/images/icons/library-inactive.png";
import LibraryInactive from "../../public/images/icons/library-inactive-hover.png";
import WeAreLibrary from "../../public/images/icons/library-active.png";

import PlaylistIcon from "../../public/images/icons/playlist-inactive.png";
import PlaylistInactive from "../../public/images/icons/playlist-inactive-hover.png";

import LikedIcon from "../../public/images/icons/liked-inactive.png";
import LikedInactive from "../../public/images/icons/liked-inactive-hover.png";
import TheWorld from "../../public/icons/TheWorld.vue";

export default {
  components: { TheWorld },
  data() {
    return {
      home: HomeIcon,
      search: SearchIcon,
      library: LibraryIcon,
      playlist: PlaylistIcon,
      liked: LikedIcon,
      testM: "hola",
      WeAreHome: WeAreHome,
      WeAreSearch: WeAreSearch,
      WeAreLibrary: WeAreLibrary,
    };
  },
  computed: {
    homeC() {
      if (this.$route.name === "home") {
        return true;
      } else {
        return false;
      }
    },
    searchC() {
      if (this.$route.name === "search") {
        return true;
      } else {
        return false;
      }
    },
    libraryC() {
      if (this.$route.name === "library") {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    hover(name) {
      switch (name) {
        case "home":
          this.home = HomeInactive;
          break;
        case "search":
          this.search = SearchInactive;
          break;
        case "library":
          this.library = LibraryInactive;
          break;
        case "playlist":
          this.playlist = PlaylistInactive;
          break;

        case "liked":
          this.liked = LikedInactive;
          break;
      }
    },
    unhover(name) {
      switch (name) {
        case "home":
          this.home = HomeIcon;
          break;
        case "search":
          this.search = SearchIcon;
          break;
        case "library":
          this.library = LibraryIcon;
          break;
        case "playlist":
          this.playlist = PlaylistIcon;
          break;
        case "liked":
          this.liked = LikedIcon;
          break;
      }
    },
  },
};
</script>

<style></style>
