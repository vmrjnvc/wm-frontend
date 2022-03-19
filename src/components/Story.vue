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
  width: 280px;
  .story-img {
    height: 150px;
    width: 100%;
    background-color: $darkGray;
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
      button {
        float: right;
        background-color: $gray;
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        &:hover {
          background-color: $greenLight;
          color: #fff;
        }
      }
    }
}
</style>
