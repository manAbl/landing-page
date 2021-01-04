<template>
  <div>
    <i-navbar />
    <router-view></router-view>
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
