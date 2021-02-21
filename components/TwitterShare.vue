<template>
  <a
    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
    class="twitter-share-button"
    :data-text="text"
    :data-hashtags="(hashtags || []).join(',')"
    data-related="___________k_k_"
    data-show-count="false"
    >Tweet</a
  >
</template>

<script>
export default {
  name: "TwitterShare",
  props: {
    title: String,
    hashtags: Array
  },
  head() {
    return {
      script: [
        {
          src: "https://platform.twitter.com/widgets.js",
          async: true
        }
      ]
    };
  },
  computed: {
    text() {
      return `${this.title} by @___________k_k_`;
    }
  }
};
</script>

<style></style>
