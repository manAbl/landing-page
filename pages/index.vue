<template>
  <main class="container is-fluid mb-5 pt-5">
    <i-section-condensed
      title="featured products"
      classes="featured-products"
      subtitle="Lorem ipsum is simply dummy text of the printing and typesetting industry."
    >
      <i-card-list :products="featuredProducts" />
    </i-section-condensed>

    <i-tag-tiles :items="tags" />

    <i-section-condensed
      classes="deals-wrapper"
      title="daily deals"
      subtitle="There are many variations of passages of lorem ipsum available."
    >
      <div slot="header-end" class="comming-timer is-countdown">
        <span class="countdown-row countdown-show3"
          ><span class="countdown-section"
            ><span class="countdown-amount text-green">0</span
            ><span class="countdown-period">Hours</span></span
          ><span class="countdown-section"
            ><span class="countdown-amount text-green">0</span
            ><span class="countdown-period">Minutes</span></span
          ><span class="countdown-section"
            ><span class="countdown-amount text-green">0</span
            ><span class="countdown-period">Seconds</span></span
          ></span
        >
      </div>
      <i-cards-carousel
        :carousel-items="deals"
        :config="{ repeat: true, itemToShow: 5 }"
      />
    </i-section-condensed>
  </main>
</template>

<script>
import ISectionCondensed from '~/components/SectionCondensed'
import ICardsCarousel from '~/components/CardsCarousel'
import ICardList from '~/components/CardList'
import ITagTiles from '~/components/TagTiles'

export default {
  layout: 'basic',
  name: 'HomePage',
  components: {
    ITagTiles,
    ICardList,
    ICardsCarousel,
    ISectionCondensed,
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
    deals() {
      return [
        ...this.featuredProducts,
        ...this.featuredProducts,
        ...this.featuredProducts,
      ]
    },
    tags() {
      return [
        {
          icon: ['fas', 'truck-moving'],
          title: 'Free shipping order',
          subtitle: 'On order over $100',
        },
        {
          icon: ['fas', 'gift'],
          title: 'Special gift card',
          subtitle: 'The perfect gift idea',
        },
        {
          icon: ['fas', 'sync'],
          title: 'Return & exchange',
          subtitle: 'Free return within 3 days',
        },
        {
          icon: ['fas', 'phone-alt'],
          title: 'Support 24 / 7',
          subtitle: 'Customer support',
        },
      ]
    },
  },
}
</script>
<style scoped>
@import '~/assets/styles/pages/home-styles.css';
</style>
