<template>
  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Podcasts
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/30/300/300"
      />

      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/45/300/300"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/65/300/300"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/67/300/300"
        class="md:block hidden"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/100/300/300"
        class="lg:block hidden"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/100/300/300"
        class="xl:block hidden"
      />
    </div>
  </div>

  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Songs
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/30/300/300"
      />

      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/45/300/300"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/65/300/300"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/67/300/300"
        class="md:block hidden"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/100/300/300"
        class="lg:block hidden"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/100/300/300"
        class="xl:block hidden"
      />
    </div>
  </div>

  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Radios
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/30/300/300"
      />

      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/45/300/300"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/65/300/300"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/67/300/300"
        class="md:block hidden"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/100/300/300"
        class="lg:block hidden"
      />
      <the-song-box
        title="Title here"
        subTitle="Subtitle here"
        image="https://picsum.photos/id/100/300/300"
        class="xl:block hidden"
      />
    </div>
  </div>
</template>

<script>
import TheSongBox from "./TheSongBox.vue";

export default {
  data() {
    return {};
  },
  mounted() {},
  components: {
    TheSongBox,
  },
};
</script>
