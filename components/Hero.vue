<template>
  <section
    class="hero is-fullheight mb-5"
    :style="`background-image: url(${step.bg})`"
  >
    <div class="hero-body">
      <div class="container">
        <div class="is-flex is-justify-content-center is-align-items-center">
          <div
            class="intro-wrapper has-transition--regular is-animated fadeOut"
          >
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
            <a
              class="text-white is-inline-block has-text-centered buy-button green-bg is-borderless has-text-weight-bold"
            >
              Shop now
              <fa-icon
                :icon="['fas', 'arrow-right']"
                class="icon--small ml-3"
              />
            </a>
          </div>
          <div :class="`image-wrapper-${currentStep} has-transition--regular`">
            <img :src="step.imageSrc" />
          </div>
        </div>
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
    </div>
  </section>
</template>

<script>
const steps = [
  {
    title:
      'Houseplant <span class="is-block">The Perfect Choice.</span><div></div>',
    subtitle:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry <br> has been the industry's standard",
    imageSrc: '/img77.png',
    bg: 'b-bg.jpg',
  },
  {
    title:
      'Plants Gonna Make <span class="is-block">People Happy.</span><div></div>',
    subtitle:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    imageSrc: '/img78.png',
    bg: 'b-bg2.jpg',
  },
  {
    title: 'Plants for healthy',
    subtitle:
      'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
    imageSrc: '/img79.png',
    bg: 'b-bg3.jpg',
  },
]

export default {
  name: 'IHero',
  data: () => ({
    currentStep: 1,
    step: {
      ...steps[0],
    },
  }),
  methods: {
    forward() {
      if (this.currentStep <= 2) {
        this.currentStep += 1
      } else {
        this.currentStep = 1
      }
      this.step = { ...steps[this.currentStep - 1] }
    },
    backward() {
      if (this.currentStep <= 3 && this.currentStep !== 1) {
        this.currentStep -= 1
      } else if (this.currentStep <= 1) {
        this.currentStep = 3
      } else {
        this.currentStep = 1
      }
      this.step = { ...steps[this.currentStep - 1] }
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/hero.css';
</style>
