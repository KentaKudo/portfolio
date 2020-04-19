<template>
  <div class="main-wrapper">
    <div class="container">
      <Navigation />

      <div class="container-fluid">
        <BaseSection id="about">
          <About />
        </BaseSection>

        <BaseSection id="experience">
          <Experiences />
        </BaseSection>

        <BaseSection id="education">
          <Educations />
        </BaseSection>

        <BaseSectiono id="skills">
          <Skills />
        </BaseSectiono>

        <BaseSection id="interests">
          <Interests />
        </BaseSection>

        <BaseSection id="awards">
          <Awards />
        </BaseSection>
      </div>
    </div>
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
import Interests from "@/components/Interests";

export default {
  components: {
    Navigation,
    BaseSection,
    About,
    Experiences,
    Educations,
    Skills,
    Awards,
    Interests
  }
};
</script>

<style>
</style>
