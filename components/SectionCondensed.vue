<template>
  <section :class="`${classes}`">
    <header class="has-text-centered">
      <h1 class="heading-IV is-capitalized mb-5">{{ title }}</h1>
      <span class="is-inline-block mb-5">
        <img src="hbdr.png" />
      </span>
      <p>
        {{ subtitle }}
      </p>
      <slot name="header-end" />
    </header>
    <div class="body--inner-wrapper mb-5 mt-5">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ISectionCondensed',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/section-condensed.css';
</style>
