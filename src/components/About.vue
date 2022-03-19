<script>
import Story from './Story.vue'
export default {
  name: 'About',
  components: {
    Story,
  },
  props: {
    mobile: {
      type: Boolean,
    },
    svgs: {
      type: Array,
    },
  },
}
</script>

<template>
  <div class="about-container">
    <h2>Who We Are</h2>
    <Story :mobile="mobile" :svg="svgs[0]" />
    <Story :mobile="mobile" :svg="svgs[1]" />
  </div>
</template>

<style lang="scss">
.about-container {
  width: 85%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}
@media (min-width: 480px) {
  .about-container {
    align-items: flex-start;
    padding: 2rem 0;
  }
}
</style>
