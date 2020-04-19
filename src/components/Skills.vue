<template>
  <div>
    <h2>Skills</h2>
    <div v-for="skill in skills" :key="skill.category">
      <div>{{ skill.category }}</div>
      <ul>
        <li v-for="topic in skill.topics" :key="topic">
          <i></i>
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
