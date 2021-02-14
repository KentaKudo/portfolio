<template>
  <fragment>
    <h2 class="mb-5">Skills</h2>
    <div v-for="skill in skills" :key="skill.category">
      <h4 class="mb-2">{{ skill.category }}</h4>
      <ul class="fa-ul mb-4">
        <li class="mb-1" v-for="topic in skill.topics" :key="topic">
          <span class="fa-li">
            <i class="fa fa-check"></i>
          </span>
          {{ topic }}
        </li>
      </ul>
    </div>
  </fragment>
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
