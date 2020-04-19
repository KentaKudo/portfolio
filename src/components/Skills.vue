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
          category: "Infrastructure",
          topics: [
            "MySQL",
            "GCP",
            "Docker",
            "Kubernetes",
            "Ansible",
            "Terraform"
          ]
        },
        {
          category: "Backend",
          topics: [
            "PHP",
            "Golang",
            "Python",
            "Object Oriented Programming",
            "Design Pattern",
            "SQL"
          ]
        },
        {
          category: "Mobile",
          topics: [
            "iOS",
            "Swift",
            "Objective-C",
            "Reactive Programming",
            "MVVM Architecture"
          ]
        },
        {
          category: "Frontend",
          topics: ["JavaScript", "React", "Vue", "KnockoutJS"]
        },
        {
          category: "Others",
          topics: [
            "Machine Learning",
            "System Programming",
            "Respberry Pi",
            "Design",
            "Agile"
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>
