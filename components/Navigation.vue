<template>
  <nav>
    <button @click="toggle"><i class="fas fa-bars fa-lg"></i></button>
    <ul v-if="show">
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

<style scoped>
nav {
  margin-top: 2rem;

  position: relative;
  display: flex;
  justify-content: flex-end;
}

button {
  border: none;
  background-color: inherit;
  padding: 0;
}

ul {
  position: absolute;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;

  padding: 1rem;
  border-radius: 0.25rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
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
