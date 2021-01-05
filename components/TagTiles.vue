<template>
  <div class="container mb-5 is-flex is-justify-content-center">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div v-for="(tag, i) in items" :key="i" class="tile-wrapper">
          <article class="tile is-child box is-shadowless is-flex">
            <fa-icon :icon="tag.icon" class="icon--md text-green" />
            <div class="pl-4">
              <strong class="heading-V mb-2 is-inline-block">
                {{ tag.title }}
              </strong>
              <p>{{ tag.subtitle }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ITagTiles',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/tag-tiles.css';
</style>
