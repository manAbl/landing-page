<template>
  <div class="container is-fluid">
    <div class="bg-hero">
      <header
        class="container is-flex is-justify-content-center is-flex-direction-column has-text-centered"
      >
        <h1 class="mb-5 heading-IV">Subscribe Our Newsletter</h1>
        <span class="is-inline-block mb-5">
          <img src="/hbdr.png" />
        </span>
        <p>
          Enter Your email address to join our mailing list and keep yourself
          updated.
        </p>
      </header>
      <div class="container">
        <form
          class="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center"
        >
          <b-field>
            <div
              class="is-flex input-wrapper is-flex-direction-row is-flex-wrap-wrap mt-5 is-clipped"
            >
              <b-input
                v-model="form.email"
                type="email"
                class="input-field"
                rounded
                expanded
                custom-class="input-field is-borderless is-text-small pt-4 pb-4"
                size="is-medium"
                placeholder="Enter your email..."
              />
              <b-button
                rounded
                class="pr-5 pl-5 pt-4 pb-4 subscribe-button green-bg text-white has-text-weight-bold"
              >
                Shop now
                <fa-icon :icon="['fas', 'arrow-right']" class="ml-4" />
              </b-button>
            </div>
          </b-field>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBanner',
  data: () => ({
    form: {
      email: '',
    },
  }),
}
</script>

<style scoped>
@import '~/assets/styles/components/bottom-banner.css';
</style>
