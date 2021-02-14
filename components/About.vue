<style scoped>
img {
  max-width: 100%;
  height: auto;
}

h1 {
  left: 50%;
  transform: translate(-50%, -100%);
  text-align: center;
}

@media (min-width: 768px) {
  h1 {
    white-space: nowrap;
    transform: translate(-50%, 0);
  }
}

p.mt-extra {
  margin-top: 2rem;
}

@media (min-width: 768px) {
  p.mt-extra {
    margin-top: 8.5rem;
  }
}
</style>

<template>
  <div class="relative my-auto">
    <img
      class="d-block mx-auto"
      :src="profileImgURL"
      alt="Profile image of Kenta Kudo"
    />
    <h1 class="mb-0 position-absolute">Kenta Kudo</h1>
    <p class="lead mb-0 mt-extra">
      Engineering graduate with 5+ years of Software Engineering experience. I
      love problem solving, and transforming complicated issues into simple
      solutions. I am a logical thinker, diligent, curious, and collaborative. I
      am increasingly interested in frontend technology and its impact.
    </p>
    <p class="lead mb-5">
      Find me on <Link :href="twitterURL">Twitter</Link>,
      <Link :href="githubURL">GitHub</Link> or
      <Link :href="linkedinURL">LinkedIn</Link>.
    </p>
    <ScrollDownIcon class="mx-auto" />
  </div>
</template>

<script>
import Link from "./Link";
import ScrollDownIcon from "./ScrollDownIcon";

export default {
  name: "About",
  components: {
    Link,
    ScrollDownIcon
  },
  data() {
    return {
      profileImgURL: require("~/assets/img/Profile.png"),
      twitterURL: "https://twitter.com/___________k_k_",
      githubURL: "https://github.com/KentaKudo",
      linkedinURL: "https://www.linkedin.com/in/kenta-kudo-6a4b15a8/"
    };
  }
  // computed: {
  //   windowInnerWidth() {
  //     return window.innerWidth;
  //   }
  // }
};
</script>
