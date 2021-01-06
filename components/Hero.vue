<template>
  <div class="is-relative">
    <i-carousel
      ref="carousel"
      class="no-padding"
      :config="carouselConfig"
      @change-slide="handleChangeSlide"
    >
      <section
        v-for="(step, i) in steps"
        slot="item"
        :key="i"
        :class="`hero is-fullheight mb-5 step-slide-${i + 1} is-flex`"
      >
        {{ step.bg }}
        <div class="hero-body">
          <div class="container">
            <div
              class="is-flex is-justify-content-center is-align-items-center"
            >
              <div class="intro-wrapper">
                <div class="mb-5 pb-2 pt-5">
                  <div
                    v-if="currentStep > 1"
                    class="is-relative title welcome pl-2 is-uppercase has-text-weight-bold"
                  >
                    Welcome to Botanical
                  </div>
                  <h1
                    class="title is-relative intro-title is-capitalized"
                    v-html="step.title"
                  />
                  <p v-html="step.subtitle"></p>
                </div>
              </div>
              <div :class="`image-wrapper-${i + 1}`">
                <img :src="step.imageSrc" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </i-carousel>
    <a
      class="text-white is-inline-block has-text-centered buy-button green-bg is-borderless has-text-weight-bold"
    >
      Shop now
      <fa-icon :icon="['fas', 'arrow-right']" class="icon--small ml-3" />
    </a>

    <div class="controls-wrapper">
      <span
        class="icon--md is-inline-block mr-5 is-clickable hover-green"
        @click="backward"
      >
        <fa-icon :icon="['fas', 'angle-left']" />
      </span>
      <span class="steps-counter">
        <span class="has-text-grey-light">{{ currentStep }} / </span> 3
      </span>
      <span
        class="icon--md is-inline-block ml-5 is-clickable hover-green"
        @click="forward"
      >
        <fa-icon :icon="['fas', 'angle-right']" />
      </span>
    </div>
  </div>
</template>

<script>
import ICarousel from './Carousel'

const steps = [
  {
    title:
      'Houseplant <span class="is-block">The Perfect Choice.</span><div></div>',
    subtitle:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry <br> has been the industry's standard",
    imageSrc: '/img77.png',
  },
  {
    title:
      'Plants Gonna Make <span class="is-block">People Happy.</span><div></div>',
    subtitle:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    imageSrc: '/img78.png',
  },
  {
    title: 'Plants for healthy',
    subtitle:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    imageSrc: '/img79.png',
  },
]

export default {
  name: 'IHero',
  components: {
    ICarousel,
  },
  data: () => ({
    currentStep: 1,
  }),
  computed: {
    steps() {
      return steps
    },
    carouselConfig() {
      return {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 2200,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      }
    },
  },
  methods: {
    handleChangeSlide(n) {
      this.currentStep = n + 1
    },
    forward() {
      if (this.currentStep <= 2) {
        this.currentStep += 1
        this.$refs.carousel.$refs.carousel.next()
      } else {
        this.currentStep = 1
        this.$refs.carousel.$refs.carousel.goTo(0)
      }
    },
    backward() {
      if (this.currentStep <= 3 && this.currentStep !== 1) {
        this.currentStep -= 1
        this.$refs.carousel.$refs.carousel.prev()
      } else if (this.currentStep <= 1) {
        this.currentStep = 3
        this.$refs.carousel.$refs.carousel.goTo(3)
      } else {
        this.currentStep = 1
        this.$refs.carousel.$refs.carousel.goTo(0)
      }
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/hero.css';
</style>
