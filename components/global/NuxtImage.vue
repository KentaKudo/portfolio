<template>
  <img :src="require(`~/assets/img/${src}`)" :alt="alt" />
</template>

<script>
// TODO: figure and caption
export default {
  props: {
    src: String,
    alt: String
  }
};
</script>
