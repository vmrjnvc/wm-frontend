<script>
export default {
  name: 'Story',
  props: {
    mobile: {
      type: Boolean,
    },
    svg: {
      type: String,
    }
  },
  data() {
    return {
      showFullText: false,
      title: 'Lorem Ipsum',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    }
  },
  computed: {
    formatText() {
      if (this.showFullText) {
        return this.text
      }
      return this.mobile
        ? ''
        : `${this.text.slice(0, 150)}`
    },
  },
}
</script>

<template>
  <div class="story-container">
    <div class="story-img"><fa :icon="svg" /></div>
    <div class="story-txt">
      <p>
       <pre>{{ title }}</pre>
        {{ formatText }}
      </p>
      <button @click="showFullText = !showFullText">
        Show {{ showFullText ? 'Less' : 'More' }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.story-container {
  width: 200px;
  .story-img {
    height: 120px;
    width: 100%;
    background-color:  $gray;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 3em;
      &:hover {
        color: $greenLight;
      }
    }
  }
    .story-txt {
      pre {
        font-size: 1.1rem;
      }
      p {
        font-size: 1rem;
      }
      button {
        float: right;
        background-color: $gray;
        margin-top: 0.5rem;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        &:hover {
          background-color: $greenLight;
          color: #fff;
        }
      }
    }
}
@media (min-width: 480px) {
  .story-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 1rem;
    .story-img {
      width: 200px;
    }
    .story-txt {
      width: calc(100% - 220px);
    }
  }
}
</style>
