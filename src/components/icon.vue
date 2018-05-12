<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'icon',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
  .icon {
    width: 1.5em;
    height: 1.5em;
    /* vertical-align: -0.15em; */
    fill: currentColor;
    overflow: hidden;
  }
</style>
