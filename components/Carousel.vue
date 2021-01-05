<template>
  <b-carousel-list
    class="is-shadowless"
    :data="carouselItems"
    :repeat="config.repeat ? config.repeat : defaultConfig.repeat"
    :arrow="config.arrow ? config.arrow : defaultConfig.arrow"
    :items-to-show="
      config.itemToShow ? config.itemToShow : defaultConfig.itemToShow
    "
  >
    <template slot="item" slot-scope="item">
      <slot :item="item" name="item" />
    </template>
  </b-carousel-list>
</template>

<script>
const defaultConfig = {
  arrow: false,
  repeat: false,
  itemToShow: 3,
}

export default {
  name: 'ICarousel',
  props: {
    carouselItems: {
      type: Array,
      required: true,
    },
    config: {
      type: Object,
      default: () => ({ ...defaultConfig }),
    },
  },
  data: () => ({
    carousel: 0,
  }),
  computed: {
    defaultConfig() {
      return defaultConfig
    },
  },
}
</script>
