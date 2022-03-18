<script>
import Navbar from './components/Navbar.vue'
import Slider from './components/Slider.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Slider,
  },
  data() {
    return {
      mobile: null,
      tablet: null,
      mobileNav: null,
      windowWidth: null,
      search: null,
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
      if (this.windowWidth <= 480) {
        this.mobile = true
        this.tablet = false
        return
      } else if (this.windowWidth > 480 && this.windowWidth < 768) {
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
  />
  <Slider :mobile="mobile" />
</template>

<style lang="scss"></style>
