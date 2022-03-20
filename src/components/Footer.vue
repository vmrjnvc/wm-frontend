<script>
export default {
  name: 'Footer',
  props: {
    svgs: {
      type: Array,
    },
    tablet: {
      type: Boolean,
    },
    mobile: {
      type: Boolean,
    },
  },
  methods: {
    scrollToTop() {
      document.documentElement.scrollTo({ top: 0 })
    },
  },
}
</script>

<template>
  <footer id="footer">
    <div class="social-networks-container">
      <a href="" class="svg-network-circle"><fa :icon="['fab', svgs[6]]" /></a>
      <a href="" class="svg-network-circle"><fa :icon="['fab', svgs[7]]" /></a>
      <a href="" class="svg-network-circle"><fa :icon="svgs[8]" /></a>
    </div>
    <div class="footer-nav" v-show="!mobile && !tablet">
      <ul>
        <li class="home">
          <a href="#nav">HOME</a>
        </li>
        <li class="about">
          <a href="#about">ABOUT US</a>
        </li>
        <li class="work">
          <a href="#work">OUR WORK</a>
        </li>
        <li class="contact">
          <a href="">CONTACT</a>
        </li>
      </ul>
    </div>
    <div class="svg-network-circle">
      <button class="scroll-top-btn" @click="scrollToTop">
        <fa :icon="svgs[11]" />
      </button>
    </div>
  </footer>
</template>

<style lang="scss">
@import '../assets/variables.scss';

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 3%;
  background-color: $gray;
  margin-top: 2rem;
  .footer-nav {
    justify-self: center;
    width: 65%;
    max-width: 500px;
    ul {
      display: flex;
      list-style: none;
      width: 100%;
      justify-content: space-around;
      gap: 2rem;
      a {
        font-size: 1.2rem;
        &:hover {
          color: $greenLight;
        }
      }
    }
  }
  .social-networks-container {
    width: 150px;
    display: flex;
    justify-content: space-around;
  }
}
.svg-network-circle {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg:hover {
    color: $greenLight;
  }
}
</style>
