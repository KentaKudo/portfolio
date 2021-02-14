<style scoped>
/* button {
  display: block;
  border: none;
  background-color: inherit;
  padding: 0;
  cursor: default;
} */
</style>

<template>
  <!-- <button @mouseover="hover = true" @mouseleave="hover = false"> -->
  <ScrollDownDefault class="d-block" v-if="!hover" />
  <!-- <ScrollDownHover v-if="hover" /> -->
  <!-- </button> -->
</template>

<script>
import ScrollDownDefault from "~/assets/img/ScrollDown.svg";
import ScrollDownHover from "~/assets/img/ScrollDownHover.svg";

export default {
  name: "ScrollDownIcon",
  components: {
    ScrollDownDefault,
    ScrollDownHover
  },
  data() {
    return { hover: false };
  }
};
</script>
