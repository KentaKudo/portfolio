<template>
  <section :id="id" class="resume-section p-3 p-lg-5 d-flex d-column">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "BaseSection",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
