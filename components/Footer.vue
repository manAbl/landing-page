<template>
  <footer class="footer has-background-white">
    <div class="content">
      <div
        v-for="(list, i) in sectionsLists"
        :key="i"
        :class="`${list.tag ? 'tags-wrapper' : ''} list-wrapper`"
      >
        <ul>
          <h3 class="is-uppercase heading has-text-weight-bold">
            {{ list.section }}
          </h3>
          <li
            v-for="link in list.links"
            :key="link.label"
            :class="`${
              list.tag ? 'hover-green-bg text-white-hover is-clickable' : ''
            }`"
          >
            <template v-if="link.html">
              <fa-icon v-if="link.icon" :icon="link.icon" class="mr-2" />
              <div class="is-inline-block" v-html="link.label" />
            </template>
            <template v-else>
              <fa-icon v-if="link.icon" :icon="link.icon" class="mr-2" />
              <span :class="link.classes ? link.classes : ''">
                {{ link.label }}
              </span>
            </template>
          </li>
          <template v-if="i == 0">
            <div class="is-inline-block social-media is-flex">
              <strong class="mr-5"> Follow us: </strong>
              <div class="is-inline-block">
                <fa-icon
                  v-for="icon in socialIcons"
                  :key="icon[1]"
                  class="mr-5 hover-green is-clickable social-icon color-inhe"
                  :icon="icon"
                />
              </div>
            </div>
          </template>
        </ul>
      </div>
    </div>
    <div
      class="has-text-weight-normal is-flex is-justify-content-center copyright-wrapper"
    >
      <p class="m-0">
        Copyright {{ currentYear }} by
        <nuxt-link to="/" class="text-green ml-1 mr-1">
          Botanical Store
        </nuxt-link>
        - All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'IFooter',
  computed: {
    sectionsLists() {
      return [
        {
          section: 'Contact us',
          links: [
            {
              label: 'Address: London Oxford Street, 012 United Kingdom.',
              icon: ['fas', 'map-marker-alt'],
              classes: 'has-text-weight-bold color-charcoal',
            },
            {
              html: true,
              label:
                'Phone : <a href="tel: (+032) 3456 7890" class="hover-green color-inherit">(+032) 3456 7890 </a>',
              icon: ['fas', 'phone-alt'],
            },
            {
              html: true,
              label: `
                Email: <a href="mailto:Botanicalstore@gmail.com" class="hover-green color-inherit">Botanicalstore@gmail.com</a>
              `,
              icon: ['far', 'envelope'],
            },
          ],
        },
        {
          section: 'Information',
          links: [
            {
              label: 'New products',
              classes: 'hover-green is-clickable',
            },
            {
              label: 'Top Sellers',
              classes: 'hover-green is-clickable',
            },
            {
              label: 'Our Blog',
              classes: 'hover-green is-clickable',
            },
            {
              label: 'About Our Shop',
              classes: 'hover-green is-clickable',
            },
            {
              label: 'Privacy Policy',
              classes: 'hover-green is-clickable',
            },
          ],
        },
        {
          section: 'My account',
          links: [
            {
              label: 'My account',
              classes: 'hover-green is-clickable',
            },
            {
              label: 'Discount',
              classes: 'hover-green is-clickable',
            },
            {
              label: 'Orders history',
              classes: 'hover-green is-clickable',
            },
            {
              label: 'Personal information',
              classes: 'hover-green is-clickable',
            },
          ],
        },
        {
          section: 'Popular tags',
          tag: true,
          links: [
            {
              label: 'Trend',
            },
            {
              label: 'Decor',
            },
            {
              label: 'Plant',
            },
            {
              label: 'Table tree',
            },
            {
              label: 'Bedroom tree',
            },
            {
              label: 'Living room',
            },
          ],
        },
      ]
    },
    socialIcons() {
      return [
        ['fab', 'facebook-f'],
        ['fab', 'twitter'],
        ['fab', 'pinterest'],
        ['fab', 'google-plus-g'],
      ]
    },
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
@import '~/assets/styles/components/footer.css';
</style>
