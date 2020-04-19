<template>
  <div class="my-auto">
    <h1>{{ name }}</h1>
    <p>{{ about }}</p>
    <div>
      <a href="./cv_2019091.pdf" download>Download CV</a>
    </div>
    <ul>
      <li>
        <a :href="facebookURL" target="_blank">
          <span>
            <i></i>
            <i></i>
          </span>
        </a>
      </li>
      <li>
        <a :href="twitterURL" target="_blank">
          <span>
            <i></i>
            <i></i>
          </span>
        </a>
      </li>
      <li>
        <a :href="linkedinURL" target="_blank">
          <span>
            <i></i>
            <i></i>
          </span>
        </a>
      </li>
      <li>
        <a :href="githubURL" target="_blank">
          <span>
            <i></i>
            <i></i>
          </span>
        </a>
      </li>
      <li>
        <a :href="mediumURL" target="_blank">
          <span>
            <i></i>
            <i></i>
          </span>
        </a>
      </li>
      <li>
        <a :href="mailto" target="_blank">
          <span>
            <i></i>
            <i></i>
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
      mailto: "mailto:yd37574@gmail.com",
      about:
        "Engineering graduate with 3.5+ years of Software Engineering experience. I love problem-solving and turning complicated issues into simplified solutions. I am a logical thinker, diligent, curious, and thrive on teamwork. Now I am looking for a new challenge with an exciting and growing company.",
      linkedinURL: "https://www.linkedin.com/in/kenta-kudo-6a4b15a8/",
      githubURL: "https://github.com/KentaKudo",
      twitterURL: "https://twitter.com/_______K_K_",
      facebookURL: "https://www.facebook.com/kentakudo.kenta",
      mediumURL: "https://medium.com/@_______K_K_"
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