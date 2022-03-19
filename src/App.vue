<script>
import Navbar from './components/Navbar.vue'
import Slider from './components/Slider.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Slider,
    About,
    Work,
    Footer,
  },
  data() {
    return {
      mobile: null,
      tablet: null,
      mobileNav: null,
      windowWidth: null,
      search: null,
      svgs: [
        'graduation-cap',
        'thumbs-up',
        'calculator',
        'clock',
        'cloud',
        'heart',
        'facebook-f',
        'twitter',
        'envelope',
        'house',
        'circle-question',
        'arrow-up-long',
      ],
    }
  },
  created() {
    window.addEventListener('resize', this.checkSize)
    this.checkSize()
  },
  methods: {
    toggleSearch() {
      this.search = !this.search
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkSize() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth < 480) {
        this.mobile = true
        this.tablet = false
        return
      } else if (this.windowWidth >= 480 && this.windowWidth < 768) {
        this.mobile = false
        this.tablet = true
        return
      } else {
        this.mobile = false
        this.tablet = false
      }
    },
  },
}
</script>

<template>
  <Navbar
    :search="search"
    :toggleMobileNav="toggleMobileNav"
    :toggleSearch="toggleSearch"
    :mobile="mobile"
    :mobileNav="mobileNav"
    :tablet="tablet"
    :svgs="svgs"
  />
  <Slider :mobile="mobile" />
  <About :mobile="mobile" :svgs="svgs" />
  <Work :svgs="svgs" />
  <Footer :svgs="svgs" :mobile="mobile" :tablet="tablet" />
</template>

<style lang="scss"></style>
