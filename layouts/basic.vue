<template>
  <div>
    <i-navbar />
    <router-view></router-view>
    <div class="mb-5 pb-3" />
    <i-bottom-banner />
    <i-footer />
  </div>
</template>

<script>
import INavbar from '~/components/Navbar'
import IFooter from '~/components/Footer'
import IBottomBanner from '~/components/BottomBanner'

export default {
  name: 'BasicLayout',
  components: {
    INavbar,
    IFooter,
    IBottomBanner,
  },
}
</script>
