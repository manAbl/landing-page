<template>
  <main class="container main is-fluid p-0 mb-5 pb-5">
    <!---- hero section start ---->
    <i-hero class="mb-5" />
    <div class="mb-5 pb-5"></div>
    <!---- hero section end ---->

    <div class="container is-fluid">
      <!---- why choose us section start ---->
      <section class="section choose-us mb-5">
        <div class="container is-flex">
          <div class="image-wrapper mb-5">
            <img src="/img01.jpg" class="img-fluid" />
          </div>
          <div class="description-wrapper">
            <h1 class="heading-II is-relative">Why choose us ?</h1>
            <p class="heading-subtitle">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry, lorem ipsum has been the industry's standard dummy text
              ever since the 1500s when an unknown printer took a galley ...
              <a href="/" class="text-green is-italic">Learn More</a>
            </p>

            <ul class="reasons-wrapper">
              <li
                v-for="(r, i) in chooseReasons"
                :key="i"
                class="is-flex is-align-items-center pb-5 pt-2"
              >
                <fa-icon :icon="r.icon" class="icon--md text-green mr-5" />
                <div>
                  <h3 class="heading-III">
                    {{ r.title }}
                  </h3>
                  <p>
                    {{ r.subtitle }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!---- why choose us section end ---->

      <!---- Featured products section START ---->
      <i-section-condensed
        title="featured products"
        classes="featured-products"
        subtitle="Lorem ipsum is simply dummy text of the printing and typesetting industry."
      >
        <i-card-list :products="featuredProducts" />
      </i-section-condensed>
      <!---- Featured products section END ---->

      <i-tag-tiles :items="tags" />

      <!---- Ads section start ---->
      <section class="section mb-5 mt-5 ads-wrapper">
        <div class="container">
          <div
            class="is-flex is-flex-wrap-wrap pb-5 mb-5 mt-5 pb-5 ads--inner-wrapper"
          >
            <div class="image-wrapper">
              <a href="/">
                <img src="/ad1.jpg" />
              </a>
            </div>
            <div class="image-wrapper">
              <a href="/">
                <img src="/ad2.jpg" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!---- Daily deals section START ---->
      <i-section-condensed
        classes="deals-wrapper mb-5 pb-5"
        title="daily deals"
        subtitle="There are many variations of passages of lorem ipsum available."
      >
        <div slot="header-end" class="comming-timer is-countdown mt-4">
          <span class="countdown-row countdown-show3">
            <span class="countdown-section">
              <span class="countdown-amount text-green">0</span>
              <span class="countdown-period">Hours</span></span
            >
            <span class="countdown-section">
              <span class="countdown-amount text-green">0</span>
              <span class="countdown-period">Minutes</span></span
            >
            <span class="countdown-section">
              <span class="countdown-amount text-green">0</span>
              <span class="countdown-period">Seconds</span></span
            >
          </span>
        </div>
        <i-carousel :config="dealsCarouselConfig">
          <i-product-card
            v-for="(item, i) in deals"
            slot="item"
            :key="i"
            :image-src="item.image"
            :is-hot="item.hot"
            :is-sale="item.sale"
            :title="item.name"
            :price="item.price"
            href="/"
          />
        </i-carousel>
      </i-section-condensed>
      <!---- Daily deals section END ---->
      <div class="mb-5 pb-5" />
      <!---- Logos section START ---->
      <section class="section mb-5 pt-5">
        <div class="container">
          <i-carousel :config="logosCarouselConfig">
            <div v-for="(item, i) in logos" slot="item" :key="i">
              <div
                class="is-flex is-justify-content-center is-align-items-center"
              >
                <a href="/">
                  <img :src="item.imageSrc" class="img-fluid" />
                </a>
              </div>
            </div>
            <!-- <template slot="item" slot-scope="{ item }"> -->
            <!-- </template> -->
          </i-carousel>
        </div>
      </section>
      <!---- Logos section END ---->
    </div>
  </main>
</template>

<script>
import ISectionCondensed from '~/components/SectionCondensed'
import ICardList from '~/components/CardList'
import ITagTiles from '~/components/TagTiles'
import ICarousel from '~/components/Carousel'
import IProductCard from '~/components/ProductCard'
import IHero from '~/components/Hero'

export default {
  layout: 'basic',
  name: 'HomePage',
  components: {
    IHero,
    ITagTiles,
    ICardList,
    ICarousel,
    IProductCard,
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
    chooseReasons() {
      return [
        {
          icon: ['fas', 'seedling'],
          title: 'Hand planted',
          subtitle:
            'There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.',
        },
        {
          icon: ['fas', 'leaf'],
          title: 'Natural Sunlight',
          subtitle:
            'It is a long established fact that a reader will be distracted by the reable content of a page.',
        },
        {
          icon: ['fas', 'spa'],
          title: 'Clean Air',
          subtitle:
            'There are many variations of passages of lorem ipsum available, but the majority have suffered.',
        },
      ]
    },
    logos() {
      return [
        { imageSrc: '/p-logo1.png' },
        { imageSrc: '/p-logo2.png' },
        { imageSrc: '/p-logo4.png' },
        { imageSrc: '/p-logo5.png' },
        { imageSrc: '/p-logo6.png' },
        { imageSrc: '/p-logo2.png' },
        { imageSrc: '/p-logo4.png' },
        { imageSrc: '/p-logo5.png' },
        { imageSrc: '/p-logo6.png' },
        { imageSrc: '/p-logo2.png' },
        { imageSrc: '/p-logo4.png' },
        { imageSrc: '/p-logo5.png' },
        { imageSrc: '/p-logo6.png' },
        { imageSrc: '/p-logo2.png' },
        { imageSrc: '/p-logo4.png' },
        { imageSrc: '/p-logo5.png' },
        { imageSrc: '/p-logo6.png' },
        { imageSrc: '/p-logo2.png' },
        { imageSrc: '/p-logo4.png' },
        { imageSrc: '/p-logo5.png' },
        { imageSrc: '/p-logo6.png' },
      ]
    },
    logosCarouselConfig() {
      return {
        dots: false,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      }
    },
    dealsCarouselConfig() {
      return {
        dots: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3500,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              dots: true,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              infinite: true,
            },
          },
        ],
      }
    },
  },
}
</script>
<style scoped>
@import '~/assets/styles/pages/home-styles.css';
</style>
