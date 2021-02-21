<style scoped>
h3,
h4 {
  font-family: "Permanent Marker", serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #343a40;
}

h3 {
  font-size: 1.75rem;
  line-height: 2rem;
}

h4 {
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #868e96;
  margin-bottom: 0;
}

.text-primary {
  color: #0c8ccc !important;
}

li {
  margin-bottom: 2.5rem;
}

li:last-child {
  margin-bottom: 0;
}

div.d-flex {
  flex-direction: column;
}

@media (min-width: 768px) {
  div.d-flex {
    flex-direction: row;
    align-items: center;
  }
}
</style>

<template>
  <li class="d-flex flex-column">
    <h3 class="mb-1">{{ title }}</h3>
    <div class="mb-3 d-flex justify-content-between">
      <h4>{{ subtitle }}</h4>
      <p class="text-primary mb-0">{{ startDate }} – {{ endDate }}</p>
    </div>
    <p class="mb-0">{{ description }}</p>
  </li>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    subtitle: String,
    description: String,
    startDate: String,
    endDate: String
  }
};
</script>
