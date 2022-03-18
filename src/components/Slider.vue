<script>
export default {
  name: 'Slider',
  props: {
    mobile: {
      type: Boolean,
    },
  },
  data() {
    return {
      currentSlide: 1,
    }
  },
  methods: {
    increment() {
      if (this.currentSlide === 2) this.currentSlide = 0
      else this.currentSlide += 1
    },
    decrement() {
      if (this.currentSlide === 0) this.currentSlide = 2
      else this.currentSlide -= 1
    },
  },
}
</script>

<template>
  <div class="slide-container">
    <Transition name="fade" mode="out-in"
      ><img
        class="slide-svg"
        src="../assets/images/noted.svg"
        alt="collaboration"
        v-if="currentSlide === 0"
    /></Transition>
    <Transition name="fade" mode="out-in">
      <img
        class="slide-svg"
        src="../assets/images/services.svg"
        alt="services"
        v-show="currentSlide === 1"
    /></Transition>
    <Transition name="fade" mode="out-in">
      <img
        class="slide-svg"
        src="../assets/images/coworking.svg"
        alt="coworking"
        v-show="currentSlide === 2"
    /></Transition>
  </div>
  <div class="slide-btn-container" v-show="mobile">
    <button class="left-slide-btn" @click="decrement">
      <fa icon="arrow-left" />
    </button>

    <p v-if="currentSlide === 0">LOREM IPSUM DOLOR SIT 1</p>
    <p v-if="currentSlide === 1">LOREM IPSUM DOLOR SIT 2</p>
    <p v-if="currentSlide === 2">LOREM IPSUM DOLOR SIT 3</p>

    <button class="right-slide-btn" @click="increment">
      <fa icon="arrow-right" />
    </button>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.slide-container {
  width: 100%;
  height: 200px;
  background-color: rgb(228, 228, 228);
  position: relative;
  .slide-svg {
    height: 100%;
    width: 100%;
    padding: 1rem;
    position: absolute;
  }
}
.slide-btn-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.3rem 0.6rem;
  svg:hover {
    color: $greenLight;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
