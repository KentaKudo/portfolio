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
    <h2 class="mb-5">Experience</h2>
    <ul class="pl-0 mb-0">
      <fragment v-for="exp in experiences" :key="exp.id">
        <Card
          :title="exp.position"
          :subtitle="exp.company"
          :description="exp.description"
          :startDate="exp.startDate"
          :endDate="exp.endDate"
        />
      </fragment>
    </ul>
  </fragment>
</template>

<script>
import Card from "./Card";

export default {
  name: "Experiences",
  components: {
    Card
  },
  data() {
    return {
      experiences: [
        {
          id: 3,
          position: "Software Engineer",
          company: "Utility Warehouse",
          description:
            "As a member of the payment platform team, rewriting the legacy system to the new system which is scalable and maintainable  with a user-friendly interface using the latest tech stack such as microservices in Go and Kubernetes is my main focus. Making the system regulation compliant is also our responsibility.",
          startDate: "April 2019",
          endDate: "Present"
        },
        {
          id: 2,
          position: "Junior Backend Engineer",
          company: "Mercari UK",
          description:
            "My main responsibility was to add features and functions to the large user-base applications communicating with PMs to make a consumer facing app that grows in the area. I made myself an expert of a PHP and Go developer using GCP platform with OOP and TDD practices.",
          startDate: "December 2016",
          endDate: "March 2019"
        },
        {
          id: 1,
          position: "iOS Engineer",
          company: "Smart Tech Ventures",
          description:
            "I developed the e-commerce app using MVC architecture in Swift and Objective-C. I also wrote and created from scratch a healthcare application introducing MVVM architecture and Reactive Programming.",
          startDate: "May 2015",
          endDate: "March 2017"
        }
      ]
    };
  }
};
</script>
