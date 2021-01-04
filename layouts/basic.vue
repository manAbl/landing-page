<template>
  <div>
    <i-navbar />
    <router-view></router-view>
    <i-footer />
  </div>
</template>

<script>
import INavbar from '~/components/Navbar'
import IFooter from '~/components/Footer'

export default {
  name: 'BasicLayout',
  components: {
    INavbar,
    IFooter,
  },
}
</script>
