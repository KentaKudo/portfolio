<style>
.container {
  max-width: 720px;
  margin: 5rem auto;
}

time {
  color: #868e96;
}

h1 {
  font-size: 4.5rem;
  font-weight: bold;
  line-height: 4rem;
}

h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}

img {
  width: 100%;
  height: auto;
}
</style>

<template>
  <article class="container">
    <img
      class="mb-5 d-block"
      v-if="page.image"
      :src="require(`~/assets/img${page.path}/${page.image.src}`)"
      :alt="page.image.alt"
    />
    <h1>{{ page.title }}</h1>
    <time class="d-block mb-4">{{ formatDate(page.createdAt) }}</time>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
    <hr />
    <footer class="d-flex justify-content-between">
      <TwitterShare :title="page.title" :hashtags="page.tags" />
      <nuxt-link to="/blog">back</nuxt-link>
    </footer>
  </article>
</template>

<script>
import TwitterShare from "@/components/TwitterShare";

const SITE_URL = "https://kentakudo.com";

export default {
  components: { TwitterShare },
  head() {
    const url = `${SITE_URL}${this.page.path}`;
    const meta = [
      {
        hid: "description",
        name: "description",
        content: this.page.description
      },
      { hid: "og:type", property: "og:type", content: "article" },
      { hid: "og:url", property: "og:url", content: url },
      { hid: "og:title", property: "og:title", content: this.page.title },
      {
        hid: "og:description",
        property: "og:description",
        content: this.page.description
      },
      { hid: "twitter:url", name: "twitter:url", content: url },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: this.page.title
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: this.page.description
      },
      {
        property: "article:published_time",
        content: this.page.createdAt
      },
      {
        property: "article:modified_time",
        content: this.page.updatedAt
      },
      {
        property: "article:tag",
        content: this.page.tags ? this.page.tags.join(",") : ""
      },
      { name: "twitter:label1", content: "Written by" },
      { name: "twitter:data1", content: "Kenta Kudo" },
      { name: "twitter:label2", content: "Filed under" },
      {
        name: "twitter:data2",
        content: this.page.tags ? this.page.tags.join(",") : ""
      }
    ];

    return {
      title: this.page.title,
      meta: this.page.image
        ? [
            ...meta,
            {
              hid: "og:image",
              property: "og:image",
              content: require(`~/assets/img${this.page.path}/${this.page.image.src}`)
            },
            {
              hid: "twitter:image",
              name: "twitter:image",
              content: require(`~/assets/img${this.page.path}/${this.page.image.src}`)
            }
          ]
        : meta,
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: url
        }
      ]
    };
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const page = await $content("blog", slug)
      .fetch()
      .catch(err => error({ statusCode: 404, message: "Page not found" }));

    return {
      page
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
