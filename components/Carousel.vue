<template>
  <carousel ref="carousel" v-bind="config" @beforeChange="emitBeforeChange">
    <slot name="item" />
  </carousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const defaultConfig = {
  dots: true,
  arrows: false,
  focusOnSelect: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2500,
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

export default {
  name: 'ICarousel',
  components: { carousel: VueSlickCarousel },
  props: {
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
  methods: {
    emitBeforeChange(_, n) {
      this.$emit('change-slide', n)
    },
  },
}
</script>
