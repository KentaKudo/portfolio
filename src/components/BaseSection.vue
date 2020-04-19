<template>
  <section :id="id">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "BaseSection",
  props: {
    id: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>
