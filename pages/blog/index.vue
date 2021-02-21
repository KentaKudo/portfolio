<style scoped>
.container {
  max-width: 720px;
  margin: 5rem auto;
}

a {
  color: inherit;
}

a:hover {
  text-decoration: none;
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: currentColor;
  top: 90%;
  left: 0;
  pointer-events: none;
}

a::before {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 0.3s;
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}

h1 {
  font-size: 2rem;
}
</style>

<template>
  <main class="container">
    <h1 class="mb-4">✍️</h1>
    <article class="mb-4" v-for="page in pages" :key="page.slug">
      <div class="d-flex justify-content-between align-items-center">
        <h2>
          <nuxt-link class="position-relative" :to="page.path">{{
            page.title
          }}</nuxt-link>
        </h2>
        <time>{{ formatDate(page.createdAt) }}</time>
      </div>
      <p>{{ page.description }}</p>
    </article>
    <hr />
    <footer class="d-flex justify-content-between">
      <nuxt-link class="position-relative" to="/">home</nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: `Blog — Kenta Kudo`
    };
  },
  async asyncData({ $content }) {
    const pages = await $content("blog")
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      pages
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>

<style></style>
