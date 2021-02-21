<template>
  <img :src="require(`~/assets/img/${src}`)" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: String,
    alt: String
  }
};
</script>
