<script>
export default {
  name: 'Navbar',
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
    svgs: {
      type: Array,
    },
  },
  data() {
    return {}
  },
}
</script>

<template>
  <nav id="nav">
    <h1 class="branding">
      <fa icon="wifi" class="logo" /> <span>Wireless</span> Media
    </h1>

    <!-- Navigation menu for tablet or bigger screen size -->
    <div class="nav-container">
      <ul v-show="!mobile" class="navigation">
        <li class="li-home" v-if="tablet">
          <a href="#nav">
            <fa :icon="svgs[9]" />
          </a>
        </li>
        <li class="li-home" v-else>
          <a href="#nav">HOME</a>
        </li>
        <span v-if="!tablet">/</span>
        <li class="li-about" v-if="tablet">
          <a href="#about"><fa :icon="svgs[10]" /></a>
        </li>
        <li class="li-about" v-else><a href="#about">ABOUT US</a></li>
        <span v-if="!tablet">/</span>
        <li class="li-work" v-if="tablet">
          <a href="#work"><fa :icon="svgs[0]" /></a>
        </li>
        <li class="li-work" v-else><a href="#work">OUR WORK</a></li>
        <span v-if="!tablet">/</span>
        <li class="li-contact" v-if="tablet">
          <a href="#footer"><fa :icon="svgs[8]" /></a>
        </li>
        <li class="li-contact" v-else><a href="#footer">CONTACT</a></li>
      </ul>

      <fa
        @click="toggleMobileNav"
        v-show="mobile"
        icon="bars"
        class="menu-icon"
        :class="{ 'icon-active': mobileNav }"
      />

      <fa
        icon="magnifying-glass"
        @click="toggleSearch"
        class="search-icon"
        :class="{ 'icon-active': search }"
      />
    </div>
  </nav>
  <Transition name="bounce">
    <input
      type="text"
      v-show="search"
      class="search-input"
      placeholder="Search"
  /></Transition>

  <!-- Mobile dropdown menu list -->
  <Transition name="slide-fade"
    ><ul v-show="mobileNav" class="dropdown-nav" :class="{ active: mobileNav }">
      <li class="li-home">
        <a href="#nav" @click="toggleMobileNav">HOME</a>
      </li>
      <li class="li-about" @click="toggleMobileNav">
        <a href="#about">ABOUT US</a>
      </li>
      <li class="li-work" @click="toggleMobileNav">
        <a href="#work">OUR WORK</a>
      </li>
      <li class="li-contact" @click="toggleMobileNav">
        <a href="#footer">CONTACT</a>
      </li>
    </ul></Transition
  >

  <!-- linear gradient bottom nav border -->
  <div class="bottom-hr"></div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

nav {
  height: 50px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 500ms ease all;
  h1 {
    font-size: 1.3rem;
    svg,
    span {
      color: $greenLight;
    }
  }
  .menu-icon {
    margin-right: 0.8rem;
    font-size: 1.4em;
  }
  .search-icon {
    font-size: 1.2em;
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
  height: 160px;
  li {
    height: 40px;
    width: 100%;
    line-height: 40px;
    vertical-align: middle;
    padding-left: 1rem;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 500;
    }
  }
  .li-home {
    background-color: $greenLight;
  }
  .li-about {
    background-color: $greenDark;
  }
  .li-work {
    background-color: $blueLight;
  }
  .li-contact {
    background-color: $blue;
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
    li {
      svg:hover,
      a:hover {
        color: $greenLight;
      }
      svg:active,
      a:active {
        color: $greenDark;
      }
      svg:focus,
      a:focus {
        color: $blueLight;
      }
    }
  }
}

// transitions
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  height: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@media (min-width: 480px) {
  .nav-container {
    width: 60%;
    .navigation {
      width: 100%;
      justify-content: space-around;
      padding-right: 5%;
    }
  }
}
@media (min-width: 768px) {
  nav {
    height: 80px;
    .branding {
      font-size: 1.6rem;
      .logo {
        font-size: 2rem;
      }
    }
  }
}
</style>
