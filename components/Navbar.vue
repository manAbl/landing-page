<template>
  <header class="header-wrapper">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container is-fluid">
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
              >
                {{ item.label }}
              </li>
              <li v-else :key="item.label" class="navbar-item is-inline-block">
                <nuxt-link to="/" class="logo">
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
              <span class="icon--small">
                <fa-icon :icon="['far', 'heart']" />
              </span>
            </div>
            <div class="navbar-item is-flex ml-1">
              <span class="icon--small">
                <fa-icon :icon="['fas', 'shopping-cart']" />
              </span>
            </div>
          </div>
        </div>
      </div>
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
  computed: {
    links() {
      return [
        {
          label: 'Home',
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
        { label: 'EN', value: 'English' },
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
}
</script>

<style scoped>
@import '~/assets/styles/components/navbar.css';
</style>
