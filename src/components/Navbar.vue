<script>
export default {
  name: 'navbar',
  props: {
    mobile: {
      type: Boolean,
    },
    mobileNav: {
      type: Boolean,
    },
    toggleMobileNav: {
      type: Function,
    },
    toggleSearch: {
      type: Function,
    },
    search: {
      type: Boolean,
    },
    tablet: {
      type: Boolean,
    },
  },
  data() {
    return {}
  },
}
</script>

<template>
  <nav>
    <h1><fa icon="wifi" /> <span>Wireless</span> Media</h1>

    <!-- Navigation menu for tablet or bigger screen size -->
    <div class="nav-container">
      <ul v-show="!mobile" class="navigation">
        <li class="home" v-if="tablet">
          <a href=""><fa icon="house" /></a>
        </li>
        <li class="home" v-else><a href="">HOME</a></li>
        <span v-if="!tablet">/</span>
        <li class="home" v-if="tablet">
          <a href=""><fa icon="circle-question" /></a>
        </li>
        <li class="home" v-else><a href="">ABOUT US</a></li>
        <span v-if="!tablet">/</span>
        <li class="home" v-if="tablet">
          <a href=""><fa icon="graduation-cap" /></a>
        </li>
        <li class="home" v-else><a href="">OUR WORK</a></li>
        <span v-if="!tablet">/</span>
        <li class="home" v-if="tablet">
          <a href=""><fa icon="envelope" /></a>
        </li>
        <li class="home" v-else><a href="">CONTACT</a></li>
      </ul>

      <fa
        @click="toggleMobileNav"
        v-show="mobile"
        icon="bars"
        class="menu-icon"
        :class="{ 'icon-active': mobileNav }"
      />

      <button>
        <fa
          icon="magnifying-glass"
          @click="toggleSearch"
          :class="{ 'icon-active': search }"
        />
      </button>
    </div>
  </nav>

  <input
    type="text"
    v-show="search"
    class="search-input"
    placeholder="Search"
  />

  <!-- Mobile dropdown menu list -->
  <ul v-show="mobileNav" class="dropdown-nav" :class="{ active: mobileNav }">
    <li class="home">
      <a href="">HOME</a>
    </li>
    <li class="about"><a href="">ABOUT US</a></li>
    <li class="work"><a href="">OUR WORK</a></li>
    <li class="contact"><a href="">CONTACT</a></li>
  </ul>

  <!-- linear gradient bottom nav border -->
  <div class="bottom-hr" v-show="!mobileNav"></div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

nav {
  height: 40px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 500ms ease all;
  h1 {
    font-size: 1.2em;
    svg,
    span {
      color: $greenLight;
    }
  }
  .menu-icon {
    margin-right: 0.5rem;
  }
  .icon-active {
    color: $greenLight;
  }
}
.search-input {
  display: block;
  width: 90%;
  margin: 0.5rem auto;
  padding-left: 0.5rem;
}
.bottom-hr {
  height: 5px;
  width: 100%;
  background: linear-gradient(315deg, $blue 0%, $greenLight 100%);
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  height: 0px;
  align-items: center;
  li,
  a {
    width: 100%;
    padding-left: 0.5rem;
    text-decoration: none;
    color: #fff;
  }
  .home {
    background-color: $greenLight;
  }
  .about {
    background-color: $greenDark;
  }
  .work {
    background-color: $blueLight;
  }
  .contact {
    background-color: $blue;
  }
  &.active {
    height: 120px;
  }
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min-content;
  .navigation {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
}
</style>
