<template>
  <div>
    <h2 class="mb-5">Experience</h2>
    <div
      v-for="job in experiences"
      :key="job.description"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ job.position }}</h3>
        <div class="subheading mb-3">{{ job.company }}</div>
        <p>{{ job.description }}</p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ job.startDate }} – {{ job.endDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  data() {
    return {
      experiences: [
        {
          position: "Software Engineer",
          company: "Utility Warehouse",
          description:
            "As a member of the payment platform team, rewriting the legacy system to the new system which is scalable and maintainable  with a user-friendly interface using the latest tech stack such as microservices in Go and Kubernetes is my main focus. Making the system regulation compliant is also our responsibility.",
          startDate: "April 2019",
          endDate: "Present"
        },
        {
          position: "Junior Backend Engineer",
          company: "Mercari UK",
          description:
            "My main responsibility was to add features and functions to the large user-base applications communicating with PMs to make a consumer facing app that grows in the area. I made myself an expert of a PHP and Go developer using GCP platform with OOP and TDD practices.",
          startDate: "December 2016",
          endDate: "March 2019"
        },
        {
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

<style>
</style>
