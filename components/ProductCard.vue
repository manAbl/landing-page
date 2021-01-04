<template>
  <div class="card is-shadowless is-relative">
    <span
      v-if="isHot"
      class="state-tag hot-offer is-uppercase is-block has-text-weight-bold text-white has-text-centered"
    >
      Hot
    </span>
    <span
      v-if="isSale"
      class="state-tag sale-offer is-uppercase is-block has-text-weight-bold text-white has-text-centered"
      :class="{ 'pulled-left': !isHot }"
    >
      sale
    </span>
    <div
      class="card-image"
      @mouseleave="() => (isHover = false)"
      @mouseenter="() => (isHover = true)"
    >
      <figure class="image">
        <img :src="imageSrc" alt="product" />
      </figure>
    </div>
    <div class="card-content is-relative has-text-centered">
      <div>
        <span class="is-inline-block mt-4 is-flex">
          <a :href="href" class="color-inherit hover-green">
            {{ title }}
          </a>
        </span>
      </div>
      <div>
        <strong>
          <span class="is-inline-block mt-4"> {{ price }} $ </span>
        </strong>
      </div>
    </div>
    <div
      class="actions-wrapper has-transition--regular is-flex is-justify-content-space-around"
      :class="{ isHover }"
      @mouseenter="() => (isHover = true)"
    >
      <b-button rounded class="hover-green-bg text-white-hover">
        <fa-icon :icon="['far', 'heart']" />
      </b-button>
      <b-button class="hover-green-bg text-white-hover">
        <fa-icon :icon="['fas', 'shopping-cart']" />
      </b-button>
      <b-button size="small" class="hover-green-bg text-white-hover">
        <fa-icon :icon="['far', 'eye']" />
      </b-button>
      <b-button rounded class="hover-green-bg text-white-hover">
        <fa-icon :icon="['fas', 'exchange-alt']" />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IProductCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    isSale: {
      type: Boolean,
      default: false,
    },
    isHot: {
      type: Boolean,
      default: false,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isHover: false,
  }),
}
</script>

<style scoped>
@import '~/assets/styles/components/product-card.css';
</style>
