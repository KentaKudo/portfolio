<style scoped>
nav {
  margin-top: 2rem;
}

button {
  border: none;
  background-color: inherit;
  padding: 0;
}

ul {
  top: 1.5rem;
  list-style-type: none;
  z-index: 10;
}

li {
  margin-bottom: 0.5rem;
}

li:last-child {
  margin-bottom: 0;
}

a {
  color: #495057;
  text-decoration: underline;
}
</style>

<template>
  <nav class="position-relative d-flex justify-content-end">
    <button @click="toggle"><i class="fas fa-bars fa-lg"></i></button>
    <ul
      class="bg-white rounded shadow position-absolute d-flex flex-column justify-content-center p-3"
      v-if="show"
    >
      <li>
        <a href="#about" @click="close">About</a>
      </li>
      <li>
        <a href="#experience" @click="close">Experience</a>
      </li>
      <li>
        <a href="#education" @click="close">Education</a>
      </li>
      <li>
        <a href="#skills" @click="close">Skills</a>
      </li>
      <li>
        <a href="#awards" @click="close">Awards</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      show: false,
      counter: 0
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    close() {
      this.show = false;
    }
  }
};
</script>
