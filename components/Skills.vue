<template>
  <div>
    <h2 class="mb-5">Skills</h2>
    <div v-for="skill in skills" :key="skill.category">
      <div class="subheading mb-3">{{ skill.category }}</div>
      <ul class="fa-ul mb-3">
        <li v-for="topic in skill.topics" :key="topic">
          <i class="fa-li fa fa-check"></i>
          {{ topic }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          category: "Language",
          topics: [
            "Go – Advanced Level",
            "PHP – Advanced Level",
            "Swift – Advanced Level",
            "Python – Intermediate Level",
            "JavaScript – Intermediate Level"
          ]
        },
        {
          category: "Tools",
          topics: [
            "Docker",
            "Kubernetes",
            "Terraform",
            "GCP",
            "Apache Kafka",
            "MySQL"
          ]
        },
        {
          category: "Practices",
          topics: [
            "Object-Oriented Programming",
            "Test-Driven Development",
            "Event-Driven Architecture",
            "microservices",
            "Design Pattern"
          ]
        },
        {
          category: "Others",
          topics: ["Machine Learning", "System Programming"]
        }
      ]
    };
  }
};
</script>
