<template>
  <div class="h-[60px] fixed bg-gray-900 w-[calc(100%-240px)] right-0 z-20">
    <div class="flex items-center justify-center mt-2">
      <LeftArrow class="ml-5 bg-black" />
      <RightArrow class="ml-5 bg-black" />
      <div class="ml-auto">
        <button class="text-gray-400 hover:text-white mr-9 font-bold">
          Sign up
        </button>
        <button
          class="mr-8 bg-white hover:underline rounded-full font-bold py-3 px-8"
        >
          Log in
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LeftArrow from "../../public/icons/LeftArrow.vue";
import RightArrow from "../../public/icons/RightArrow.vue";
export default {
  components: { LeftArrow, RightArrow },
};
</script>
