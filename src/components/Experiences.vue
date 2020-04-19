<template>
  <div>
    <h2>Experience</h2>
    <div v-for="job in experiences" :key="job.description">
      <div>
        <h3>{{ job.position }}</h3>
        <div>{{ job.company }}</div>
        <p>{{ job.description }}</p>
      </div>
      <div>
        <span>{{ job.startDate }} – {{ job.endDate }}</span>
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
          position: "Junior Backend Engineer",
          company: "Mercari UK",
          description:
            "Mercari is an e-commerce buying and selling platform. In my role, I write microservices in Golang and deploy them using GAE, GCE, Kubernetes, and Spinnaker. I also develop large userbase applications written in PHP using OOP and TDD practices. Additionally, I deal with some sysadmin tasks such as running DB migrations and executing batch commands on production.",
          startDate: "December 2016",
          endDate: "Present"
        },
        {
          position: "iOS Engineer",
          company: "Smart Tech Ventures",
          description:
            "I developed the e-commerce app using MVC architecture in Swift and Objective-C. I also wrote and created from scratch a healthcare application introducing MVVM architecture and Reactive Programming",
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
