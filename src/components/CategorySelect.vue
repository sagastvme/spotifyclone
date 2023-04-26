<template>
  <a href="#">
    <div
      class="contrast-[2] brightness-[0.87] rounded-xl aspect-square relative overflow-hidden"
      :style="`background-color : ${this.randColor};`"
    >
      <div class="text-white pt-3 pl-4 font-semibold text-[23px]">
        {{ category }}
      </div>
      <img
        class="absolute contrast-[0.55] -right-3.5 bottom-0 max-w-[100px] rotate-[20deg]"
        :src="image || ''"
      />
    </div>
  </a>
</template>

<script>
export default {
  props: ["image", "category"],
  data() {
    return {
      randColor: null,
    };
  },
  mounted() {
    this.createRandomColor();
  },
  methods: {
    createRandomColor() {
      this.randColor = Math.floor(Math.random() * 16777215).toString(16);

      this.randColor = `#${this.randColor}`;
    },
  },
};
</script>

<style></style>
