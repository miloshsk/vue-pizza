<template>
  <div>
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
    <div class="cart" @click="toggleMenu" @mouseleave="show" @mouseenter="show">
      <router-link
        to="/cart"
        tag="a"
        class="header-menu__link cart__link"
        active-class="header-menu__link-active"
      >
        <font-awesome-icon icon="shopping-cart" />
      </router-link>
      <div class="cart__length" v-if="getLength > 0">
        {{ getLength }}
      </div>
      <transition name="fade">
        <appCartForm v-if="showCart" class="cart__content"></appCartForm>
      </transition>
    </div>
  </div>
</template>

<script>
import CartForm from "./../cart/CartForm.vue";
export default {
  components: {
    appCartForm: CartForm
  },
  props: {
    showMenu: Boolean
  },
  data() {
    return {
      links: ["/", "products", "reviews"],
      linkTitles: ["Главная", "Меню", "Отзывы"],
      showCart: false
    };
  },
  computed: {
    getLength() {
      return this.$store.getters.getCartItemsLength;
    }
  },
  methods: {
    show(e) {
      if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        this.showCart = e.type === "mouseenter";
      }
    },
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
.cart {
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 10;
  &__content {
    position: fixed;
    top: 70px;
    right: 10px;
    width: auto;
    height: auto;
    background-color: $white;
    border: 3px solid $c-blue;
    padding: 5px 55px 5px 25px;
    z-index: 10;
  }
  &__length {
    width: 25px;
    height: 25px;
    background-color: $white;
    border-radius: 50%;
    border: 2px solid $c-red-light;
    position: absolute;
    bottom: -5px;
    left: -5px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    font-weight: 600;
    z-index: 11;
  }
  &__link {
    background-color: $c-red-light;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    outline: none;
    &:focus,
    &:active {
      background-color: $c-red-dark;
    }
    .fa-shopping-cart {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &:hover &__link {
    background-color: $c-red-dark;
  }
}

.header-menu {
  margin-bottom: 25px;
  overflow-y: hidden;
  transition: 0.5s ease;
  transition-delay: 0.5s;
  &__el {
    padding: 10px;
  }
  &__list {
    display: flex;
    transition: all 0.3s ease;
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
  }
}
@include media("xs") {
  .cart {
    top: auto;
    bottom: 20px;
  }
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
