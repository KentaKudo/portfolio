<style>
body.home {
  color: #868e96;
}
</style>

<style scoped>
.container {
  padding: 0 2rem;
  max-width: 540px;
}

@media (min-width: 768px) {
  .nav-bar {
    display: none !important;
  }

  #about {
    height: 100vh;
  }
}

.✍️ {
  background-color: #343a40;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .✍️ {
    background-color: inherit;
    border: 2px solid #868e96;
    top: 2rem;
    bottom: none;
    right: 2rem;
    width: 4rem;
    height: 4rem;
  }
}

.✍️:hover {
  border: none;
  background-color: #343a40;
  text-decoration: none;
}
</style>

<template>
  <main class="container">
    <nuxt-link class="✍️" to="/blog">✍️</nuxt-link>
    <Navigation class="nav-bar" />

    <BaseSection id="about">
      <About />
    </BaseSection>

    <BaseSection id="experience">
      <Experiences />
    </BaseSection>

    <BaseSection id="education">
      <Educations />
    </BaseSection>

    <BaseSection id="skills">
      <Skills />
    </BaseSection>

    <BaseSection id="awards">
      <Awards />
    </BaseSection>
  </main>
</template>

<script>
import Navigation from "@/components/Navigation";
import BaseSection from "@/components/BaseSection";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Educations from "@/components/Educations";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";

export default {
  components: {
    Navigation,
    BaseSection,
    About,
    Experiences,
    Educations,
    Skills,
    Awards
  },
  head: {
    bodyAttrs: {
      class: "home"
    }
  }
};
</script>
