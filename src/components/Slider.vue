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
    setSlide(x) {
      this.currentSlide = x
    },
  },
}
</script>

<template>
  <div class="slide-container">
    <Transition name="fade">
      <div class="img-text-container" v-show="currentSlide === 0">
        <img
          class="slide-svg"
          src="../assets/images/world.svg"
          alt="collaboration"
        />
        <p v-show="!mobile">DUIS EUISMOD CONGUE LECTUS</p>
      </div>
    </Transition>
    <Transition name="fade">
      <div class="img-text-container" v-show="currentSlide === 1">
        <img class="slide-svg" src="../assets/images/ai.svg" alt="services" />
        <p v-show="!mobile">FUSCE ALIQUAM RISUS MAGNA</p>
      </div></Transition
    >
    <Transition name="fade">
      <div class="img-text-container" v-show="currentSlide === 2">
        <img
          class="slide-svg"
          src="../assets/images/design.svg"
          alt="coworking"
        />
        <p v-show="!mobile">VESTIBULUM JUSTO JUSTO, VENENATIS</p>
      </div></Transition
    >
    <div class="slide-btn-container" v-show="!mobile">
      <button class="circle" @click="setSlide(0)">
        <fa icon="circle" :class="{ 'icon-active': currentSlide === 0 }" />
      </button>
      <button class="circle" @click="setSlide(1)">
        <fa icon="circle" :class="{ 'icon-active': currentSlide === 1 }" />
      </button>
      <button class="circle" @click="setSlide(2)">
        <fa icon="circle" :class="{ 'icon-active': currentSlide === 2 }" />
      </button>
    </div>
  </div>

  <div class="mobile-slide-btn-container" v-show="mobile">
    <button class="left-slide-btn" @click="decrement">
      <fa icon="arrow-left" />
    </button>
    <p v-if="currentSlide === 0">DUIS EUISMOD CONGUE LECTUS</p>
    <p v-if="currentSlide === 1">FUSCE ALIQUAM RISUS MAGNA</p>
    <p v-if="currentSlide === 2">VESTIBULUM JUSTO JUSTO, VENENATIS</p>
    <button class="right-slide-btn" @click="increment">
      <fa icon="arrow-right" />
    </button>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.slide-container {
  width: 100%;
  height: 160px;
  background-color: rgb(228, 228, 228);
  position: relative;
  .slide-svg {
    height: 100%;
    width: 100%;
    padding: 1.5rem;
    position: absolute;
  }
}
.mobile-slide-btn-container {
  display: flex;
  width: 100%;
  height: max-content;
  justify-content: space-between;
  padding: 0.8rem 0.6rem;
  border-bottom: 2px solid $gray;

  svg:hover {
    color: $greenLight;
  }
  p {
    font-size: 1.1rem;
    padding: 0 1rem;
    text-align: center;
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
@media (min-width: 480px) {
  .slide-container {
    height: 240px;
    width: 100%;
  }
  .img-text-container {
    display: flex;
    width: 90%;
    max-width: 800px;
    left: 50%;
    transform: translate(-50%);
    height: 200px;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    position: absolute;
    .slide-svg {
      position: static;
      height: 180px;
      width: 180px;
    }
    p {
      font-size: 1.6rem;
    }
  }
  .slide-btn-container {
    position: absolute;
    width: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%);
    .circle {
      svg {
        width: 10px;
      }
    }
  }
}
@media (min-width: 768px) {
  .slide-container {
    height: 320px;
    display: flex;
    align-items: center;
    .slide-svg {
      height: 240px;
      width: 240px;
    }
    p {
      font-size: 2.5rem;
    }
  }
}
</style>
