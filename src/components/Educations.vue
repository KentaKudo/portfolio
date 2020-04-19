<template>
  <div>
    <h2>Education</h2>
    <div v-for="education in educations" :key="education.id">
      <div>
        <h3>{{ education.faculty }}</h3>
        <div>{{ education.degree }}</div>
        <div>{{ education.major }}</div>
      </div>
      <div>
        <span>{{ education.startDate }} – {{ education.endDate }}</span>
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
          endDate: "March 2015"
        }
      ]
    };
  }
};
</script>

<style>
</style>
