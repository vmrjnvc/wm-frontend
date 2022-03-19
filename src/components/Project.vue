<script>
export default {
  name: 'Project',
  props: {
    svg: {
      type: String,
    },
  },
}
</script>

<template>
  <div class="project"><fa :icon="svg" /></div>
</template>

<style lang="scss">
@import '../assets/variables.scss';
.project {
  width: 200px;
  height: 120px;
  background-color: $darkGray;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 3em;
    &:hover,
    &:active,
    &:focus {
      color: $greenLight;
    }
  }
}
</style>
