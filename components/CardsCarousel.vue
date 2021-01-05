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
      <i-product-card
        :image-src="item.image"
        :is-hot="item.hot"
        :is-sale="item.sale"
        :title="item.name"
        :price="item.price"
        href="/"
      />
    </template>
  </b-carousel-list>
</template>

<script>
import IProductCard from '~/components/ProductCard'

const defaultConfig = {
  arrow: false,
  repeat: false,
  itemToShow: 3,
}

export default {
  name: 'ICardsCarousel',
  components: {
    IProductCard,
  },
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

<style>
@import '~/assets/styles/components/card-list.css';
</style>
