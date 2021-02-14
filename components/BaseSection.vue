<style scoped>
section {
  margin-bottom: 9rem;
}
</style>

<template>
  <section :id="id" class="d-flex flex-column">
    <slot class="section"></slot>
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
