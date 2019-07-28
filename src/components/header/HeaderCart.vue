<template>
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
</template>

<script>
import CartForm from "./../cart/CartForm.vue";

export default {
  components: {
    appCartForm: CartForm
  },
  data() {
    return {
      showCart: false
    };
  },
  props: {
    showMenu: Boolean
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

<style scoped lang="scss">
.cart {
  position: fixed;
  right: 20px;
  top: 40px;
  z-index: 10;
  &__content {
    position: fixed;
    top: 90px;
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
    color: $white;
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
@include media("xs") {
  .cart {
    top: auto;
    bottom: 20px;
  }
}
</style>
