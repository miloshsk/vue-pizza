<template>
  <nav class="header-menu">
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
    toggleMenu() {
      if (window.innerWidth < 768) {
        this.$emit("menuToggle");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-menu {
  height: 100%;
  overflow-y: hidden;
  transition: 0.3s ease;
  z-index: 100;
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
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 20px;
    width: 70%;
    background-color: $c-blue-dark;
    transform: translateX(100%);
    &__list {
      flex-direction: column;
      justify-content: center;
    }
    &__el {
      padding: 15px 10px;
    }
  }
}
</style>





}