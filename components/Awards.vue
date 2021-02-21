<style scoped>
h2 {
  font-family: "Permanent Marker", serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #343a40;

  font-size: 3rem;
  line-height: 3.5rem;

  word-break: break-all;
}

@media (min-width: 768px) {
  h2 {
    font-size: 3.5rem;
    line-height: 4rem;

    word-break: normal;
  }
}
</style>

<template>
  <fragment>
    <h2 class="mb-5">Awards &amp; Certifications</h2>
    <ul class="fa-ul mb-0">
      <li class="mb-1">
        <i class="fa-li fa fa-trophy text-warning"></i>
        Coursera: Machine Learning
      </li>
      <li class="mb-1">
        <i class="fa-li fa fa-trophy text-warning"></i>
        Diploma: Project
        <Link href="https://github.com/matsuolab-edu/dl4us"
          >DL4US (Deep Learning for All of Us)</Link
        >
      </li>
      <li class="mb-1">
        <i class="fa-li fa fa-trophy text-warning"></i>
        Design Lab:
        <Link href="https://trydesignlab.com/certificates/design-101/KentaKudo/"
          >Design 101</Link
        >
      </li>
    </ul>
  </fragment>
</template>

<script>
import Link from "./Link";

export default {
  name: "Awards",
  components: {
    Link
  }
};
</script>
