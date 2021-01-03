<template>
  <div>
    <i-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import INavbar from '~/components/Navbar'
export default {
  name: 'BasicLayout',
  components: {
    INavbar,
  },
}
</script>
