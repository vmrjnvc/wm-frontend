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
  },
  data() {
    return {
      svgs: ['graduation-cap', 'thumbs-up'],
    }
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
  max-width: 800px;
  margin: 0 auto;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
