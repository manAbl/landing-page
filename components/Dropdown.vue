<template>
  <b-dropdown
    position="is-bottom-right"
    append-to-body
    aria-role="menu"
    trap-focus
  >
    <a
      slot="trigger"
      role="button"
      class="navbar-item is-uppercase has-text-weight-normal hover-green"
    >
      <slot name="label">
        {{ optionsAsStrings ? options[0] : options[0].label }}
        <span class="dropdown--icon">
          <fa-icon :icon="['fas', 'caret-down']" />
        </span>
      </slot>
    </a>

    <b-dropdown-item
      v-for="opt in options"
      :key="optionsAsStrings ? opt : opt.value"
      :focusable="false"
      aria-role="menu-item"
      :class="`is-uppercase is-clickable hover-green ${dropdownItemsClass}`"
      custom
    >
      {{ optionsAsStrings ? opt : opt.value }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'IDropdown',
  props: {
    options: {
      type: Array,
      required: true,
    },
    optionsAsStrings: {
      type: Boolean,
      default: true,
    },
    dropdownItemsClass: {
      type: String,
      default: () => '',
    },
  },
}
</script>
<style scoped>
.dropdown--icon {
  width: 17px;
  height: 17px;
  display: flex;
  margin-left: 1rem;
  justify-content: center;
}
</style>
