<template>
  <nav class="header-menu" :class="{ 'page-nav-mobile': showMenu }">
    <ul class="header-menu__list">
      <li v-for="(link, key) in links" class="header-menu__el" :key="key">
        <router-link
          :to="link"
          tag="a"
          class="header-menu__link"
          active-class="header-menu__link-active"
          exact
          @click.native="toggleMenu"
          >{{ linkTitles[key] }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    showMenu: Boolean
  },
  data() {
    return {
      links: ["/", "products", "reviews"],
      linkTitles: ["Главная", "Меню", "Отзывы"]
    };
  },
  methods: {
    toggleMenu(e) {
      if (window.innerWidth <= 450) {
        if (e.target.closest(".cart")) {
          this.$emit("menuToggle", false);
        } else {
          this.$emit("menuToggle", !this.showMenu);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-menu {
  height: 100%;
  margin-bottom: 25px;
  overflow-y: hidden;
  transition: 0.5s ease;
  transition-delay: 0.5s;
  &__el {
    padding: 10px;
  }
  &__list {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    height: 100%;
  }
  &__link {
    text-decoration: none;
    color: $white;
    font-size: $fz-xmain;
    transition: 0.3s ease;
    &:hover:not(.cart__link),
    &:focus:not(.cart__link),
    &:active:not(.cart__link) {
      color: $c-red-light;
    }
    &-active {
      color: $c-red-light;
    }
  }
}
@include media("xs") {
  .header-menu {
    padding-top: 60px;
    margin: 0;
    max-height: 0;
    visibility: hidden;
    &__list {
      flex-direction: column;
    }
    &__el {
      padding: 15px 10px;
    }
  }
  .page-nav-mobile {
    max-height: 500px;
    visibility: visible;
  }
}
</style>
