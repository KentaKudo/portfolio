<style scoped>
h2 {
  font-family: "Permanent Marker", serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #343a40;

  font-size: 3rem;
  line-height: 3.5rem;
}

@media (min-width: 768px) {
  h2 {
    font-size: 3.5rem;
    line-height: 4rem;
  }
}
</style>

<template>
  <fragment>
    <h2 class="mb-5">Education</h2>
    <ul class=" pl-0 mb-0">
      <fragment v-for="edu in educations" :key="edu.id">
        <Card
          :title="edu.faculty"
          :subtitle="edu.degree"
          :description="edu.major"
          :startDate="edu.startDate"
          :endDate="edu.endDate"
        />
      </fragment>
    </ul>
  </fragment>
</template>

<script>
import Card from "./Card";

export default {
  name: "Educations",
  components: {
    Card
  },
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
