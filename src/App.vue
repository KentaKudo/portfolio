<template>
  <div class="main-wrapper">
    <div class="container">
      <Navigation />

      <div class="container-fluid p-0">
        <BaseSection id="about">
          <About class="my-auto" />
        </BaseSection>

        <BaseSection id="experience">
          <Experiences class="my-auto" />
        </BaseSection>

        <BaseSection id="education">
          <Educations class="my-auto" />
        </BaseSection>

        <BaseSection id="skills">
          <Skills class="my-auto" />
        </BaseSection>

        <BaseSection id="interests">
          <Interests class="my-auto" />
        </BaseSection>

        <BaseSection id="awards">
          <Awards class="my-auto" />
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
    Interests,
  },
};
</script>

<style></style>
