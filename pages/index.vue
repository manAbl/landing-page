<template>
  <main class="container is-fluid mb-5 pt-5">
    <section class="products-wrapper">
      <header class="has-text-centered">
        <h1 class="heading-IV">Featured Products</h1>
        <span class="is-inline-block mb-5">
          <img src="hbdr.png" />
        </span>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </header>
      <div class="products--inner-wrapper mb-5 mt-5">
        <div
          v-for="(item, i) in featuredProducts"
          :key="i"
          class="card-wrapper"
        >
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
    </section>
    <section class="deals-wrapper">
      <i-product-card title="Sit voluptatem" price="65.00" href="/" is-sale />
    </section>
  </main>
</template>

<script>
import IProductCard from '~/components/ProductCard'

export default {
  layout: 'basic',
  name: 'HomePage',
  components: {
    IProductCard,
  },
  computed: {
    featuredProducts() {
      return [
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: false,
          sale: false,
          image: 'img02.jpg',
        },
        {
          name: 'Neque Porro Quisquamest',
          price: '60.50',
          hot: true,
          sale: false,
          image: 'img03.jpg',
        },
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: false,
          sale: false,
          image: 'img04.jpg',
        },
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: false,
          sale: true,
          image: 'img05.jpg',
        },
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: false,
          sale: false,
          image: 'img06.jpg',
        },
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: true,
          sale: true,
          image: 'img07.jpg',
        },
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: false,
          sale: false,
          image: 'img08.jpg',
        },
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: false,
          sale: true,
          image: 'img09.jpg',
        },
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: false,
          sale: false,
          image: 'img10.jpg',
        },
        {
          name: 'Sit voluptatem',
          price: '68.00',
          hot: true,
          sale: false,
          image: 'img11.jpg',
        },
      ]
    },
  },
}
</script>
<style scoped>
@import '~/assets/styles/pages/home-styles.css';
</style>
