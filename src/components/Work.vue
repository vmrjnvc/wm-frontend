<script>
import Project from './Project.vue'
export default {
  name: 'Work',
  components: {
    Project,
  },
  props: {
    svgs: {
      type: Array,
    },
  },
}
</script>

<template>
  <section class="work-container" id="work">
    <h2>What We Do</h2>
    <div class="projects-container">
      <Project :svg="svgs[2]" />
      <Project :svg="svgs[3]" />
      <Project :svg="svgs[4]" />
      <Project :svg="svgs[5]" />
    </div>
  </section>
</template>

<style lang="scss">
.work-container {
  width: 85%;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
@media (min-width: 480px) {
  .work-container {
    h2 {
      align-self: flex-start;
    }
    .projects-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
