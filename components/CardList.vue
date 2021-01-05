<template>
  <div class="is-flex is-flex-wrap-wrap">
    <div v-for="(item, i) in products" :key="i" class="card-wrapper">
      <i-product-card
        :title="item.name"
        :price="item.price"
        :is-sale="item.sale"
        :is-hot="item.hot"
        :image-src="item.image"
        href="/"
      />
    </div>
  </div>
</template>

<script>
import IProductCard from '~/components/ProductCard'

export default {
  components: {
    IProductCard,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/card-list.css';
</style>
