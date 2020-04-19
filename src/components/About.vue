<template>
  <div>
    <h1 class="mb-0">{{ name }}</h1>
    <p class="lead mb-5">{{ about }}</p>
    <div class="subheading mb-4">
      <a href="./cv_2019091.pdf" download>Download CV</a>
    </div>
    <ul class="list-inline list-social-icons mb-0">
      <li v-for="social in socials" :key="social.name" class="list-inline-item">
        <a :href="social.href" target="_blank">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-stack-1x fa-inverse" :class="social.class"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Kenta",
      lastName: "Kudo",
      about:
        "Engineering graduate with 3.5+ years of Software Engineering experience. I love problem-solving and turning complicated issues into simplified solutions. I am a logical thinker, diligent, curious, and thrive on teamwork. Now I am looking for a new challenge with an exciting and growing company.",
      socials: [
        {
          name: "facebook",
          href: "https://www.facebook.com/kentakudo.kenta",
          class: "fa-facebook"
        },
        {
          name: "twitter",
          href: "https://twitter.com/_______K_K_",
          class: "fa-twitter"
        },
        {
          name: "linkedin",
          href: "https://www.linkedin.com/in/kenta-kudo-6a4b15a8/",
          class: "fa-linkedin"
        },
        {
          name: "github",
          href: "https://github.com/KentaKudo",
          class: "fa-github"
        },
        {
          name: "medium",
          href: "https://medium.com/@_______K_K_",
          class: "fa-medium"
        },
        {
          name: "email",
          href: "mailto:yd37574@gmail.com",
          class: "fa-envelope-o"
        }
      ]
    };
  },
  computed: {
    name() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>

<style>
</style>