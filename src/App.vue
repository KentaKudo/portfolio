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

        <BaseSectiono id="skills">
          <Skills class="my-auto" />
        </BaseSectiono>

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
    Interests
  }
};
</script>

<style>
body {
  font-family: "Open Sans", serif;
  padding-top: 54px;
  color: #868e96;
}

@media (min-width: 992px) {
  body {
    padding-top: 0;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Saira Extra Condensed", serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #343a40;
}

h1 {
  font-size: 6rem;
  line-height: 5.5rem;
}

h2 {
  font-size: 3.5rem;
}

.container {
  max-width: 650px;
}

.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Saira Extra Condensed", serif;
  font-size: 1.35rem;
}

.list-social-icons a {
  color: #495057;
}

.list-social-icons a:hover {
  color: #0c8ccc;
}

.list-social-icons a .fa-lg {
  font-size: 1.75rem;
}

.list-icons {
  font-size: 3rem;
}

.list-icons .list-inline-item i:hover {
  font-weight: 600;
  text-transform: uppercase;
}

section.resume-section {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

seciton.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  seciton.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}

.bg-primary {
  background-color: #0c8ccc !important;
}

.text-primary {
  color: #0c8ccc !important;
}

a {
  color: #495057;
  text-decoration: underline;
}

a:hover,
a:focus,
a:active {
  color: #0c8ccc;
}
</style>
