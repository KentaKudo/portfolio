<style scoped>
a {
  color: #495057;
  position: relative;
}

a:hover {
  color: #495057;
  text-decoration: none;
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  background: currentColor;
  top: 90%;
  left: 0;
  pointer-events: none;
}

a::before {
  transform-origin: 100% 50%;
  transform: scale3d(0, 1, 1);
  transition: transform 0.3s;
}

a:hover::before {
  transform-origin: 0% 50%;
  transform: scale3d(1, 1, 1);
}
</style>

<template>
  <a :href="href" target="_blank"><slot></slot></a>
</template>

<script>
export default {
  name: "Link",
  props: {
    href: String
  }
};
</script>
