<template>
  <header class="header-wrapper pt-5">
    <nav
      class="navbar is-relative"
      role="navigation"
      aria-label="main navigation"
    >
      <!-- Desktop navbar start -->
      <div class="navbar-menu">
        <div class="navbar-start">
          <i-dropdown
            :options="burgerLinks"
            :options-as-strings="false"
            dropdown-items-class="is-lowercase"
          >
            <div slot="label" style="height: 17px; width: 17px">
              <fa-icon :icon="['fas', 'bars']" />
            </div>
          </i-dropdown>
          <i-dropdown :options="langsAvailable" :options-as-strings="false" />
          <i-dropdown :options="availableCurrencies" />
        </div>

        <ul class="navbar-center">
          <template v-for="item in links">
            <li
              v-if="!item.logo"
              :key="item.label"
              class="navbar-item is-inline-block has-text-weight-bold is-uppercase"
              :class="{ 'text-green': item.label == 'home' }"
            >
              {{ item.label }}
            </li>
            <li v-else :key="item.label" class="navbar-item is-inline-block">
              <nuxt-link to="/" class="logo" exact>
                <img :src="item.src" class="img-fluid" />
              </nuxt-link>
            </li>
          </template>
        </ul>

        <div class="navbar-end">
          <div class="navbar-item is-flex mr-2">
            <span class="icon--small">
              <fa-icon :icon="['fas', 'search']" />
            </span>
          </div>
          <div class="navbar-item is-flex mr-1">
            <span class="icon--small is-relative liked" data-number="2">
              <fa-icon :icon="['far', 'heart']" />
            </span>
          </div>
          <div class="navbar-item is-flex ml-1">
            <span class="icon--small is-relative cart" data-number="2">
              <fa-icon :icon="['fas', 'shopping-cart']" />
            </span>
          </div>
        </div>
      </div>
      <!-- Desktop navbar end -->

      <!-- Mobile navbar start -->
      <div class="container is-fluid is-hidden-widescreen">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <b-button
            class="pr-3 pl-3 pt-1 pb-1 is-text border"
            @click="toggleMenu"
          >
            <fa-icon :icon="['fas', 'bars']" />
          </b-button>

          <nuxt-link to="/" class="logo">
            <img src="/logo.png" class="img-fluid" />
          </nuxt-link>

          <div class="is-flex is-justify-content-center is-hidden-mobile">
            <div class="navbar-item is-flex mr-2">
              <span class="icon--small">
                <fa-icon :icon="['fas', 'search']" />
              </span>
            </div>
            <div class="navbar-item is-flex mr-1">
              <span class="icon--small is-relative liked" data-number="2">
                <fa-icon :icon="['far', 'heart']" />
              </span>
            </div>
            <div class="navbar-item is-flex ml-1">
              <span class="icon--small is-relative cart" data-number="2">
                <fa-icon :icon="['fas', 'shopping-cart']" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile navbar end -->

      <!-- Mobile menu start -->
      <div
        :class="{ active: isMobileMenu }"
        class="mobile-menu has-transition--regular is-clipped"
      >
        <ul
          class="list-wrapper is-flex is-flex-direction-column has-background-white"
          role="group"
        >
          <template v-for="item in links">
            <li
              v-if="!item.logo"
              :key="item.label"
              class="navbar-item is-inline-block has-text-weight-bold is-uppercase"
              :class="{
                'text-green has-background-black': item.label == 'home',
              }"
            >
              {{ item.label }}
            </li>
          </template>
        </ul>
      </div>
      <!-- Mobile menu end -->
    </nav>
  </header>
</template>

<script>
import IDropdown from '~/components/Dropdown'

export default {
  name: 'Inavbar',
  components: {
    IDropdown,
  },
  data: () => ({
    isMobileMenu: false,
  }),
  computed: {
    links() {
      return [
        {
          label: 'home',
        },
        {
          label: 'Store',
        },
        {
          label: 'About',
        },
        {
          logo: true,
          label: 'Logo',
          src: '/logo.png',
        },
        {
          label: 'Blog',
        },
        {
          label: 'Pages',
        },
        {
          label: 'Contact',
        },
      ]
    },
    availableCurrencies() {
      return ['usd', 'vnd', 'euro']
    },
    langsAvailable() {
      return [
        { label: 'ENG', value: 'English' },
        { label: 'VN', value: 'Vietnamese' },
        { label: 'FR', value: 'French' },
      ]
    },
    burgerLinks() {
      return [
        {
          label: 'Login',
          value: 'login',
        },
        {
          label: 'Register',
          value: 'register',
        },
        {
          label: 'Logout',
          value: 'logout',
        },
      ]
    },
  },
  methods: {
    toggleMenu() {
      this.isMobileMenu = !this.isMobileMenu
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/navbar.css';
</style>
