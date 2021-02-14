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
</style>

<template>
  <div class="container">
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
  </div>
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
  }
  // computed: {
  //   windowInnerWidth() {
  //     return window.innerWidth;
  //   }
  // }
};
</script>
