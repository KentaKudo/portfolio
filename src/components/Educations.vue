<template>
  <div>
    <h2 class="mb-5">Education</h2>
    <div
      v-for="education in educations"
      :key="education.id"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ education.faculty }}</h3>
        <div class="subheading mb-3">{{ education.degree }}</div>
        <div>{{ education.major }}</div>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary"
          >{{ education.startDate }} – {{ education.endDate }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Educations",
  data() {
    return {
      educations: [
        {
          id: 0,
          faculty: "University of Tokyo",
          degree: "Bachelor of Engineering",
          major: "Aeronautical and Astronautical Engineering",
          startDate: "April 2011",
          endDate: "March 2015",
        },
      ],
    };
  },
};
</script>

<style></style>
