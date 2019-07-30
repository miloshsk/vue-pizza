<template>
  <div>
    <ul class="cart">
      <app-cart-item
        :item="item"
        :index="index"
        :key="index"
        v-for="(item, index) in cartItems"
      >
      </app-cart-item>
    </ul>
    <p class="cart__total">
      Общая сумма:
      <span v-if="!getDiscount">{{ result }}</span>
      <span v-else>{{ resultByDiscount }} со скидкой</span>
    </p>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "CartForm",
  components: {
    appCartItem: CartItem
  },
  computed: {
    cartItems() {
      return this.$store.getters.getCartItems;
    },
    getDiscount() {
      return this.$store.getters.getDiscount;
    },
    result() {
      return this.$store.getters.getCartTotalCost;
    },
    resultByDiscount() {
      return this.$store.getters.getCartTotalCost * (1 - 10 / 100);
    }
  }
};
</script>

<style scoped></style>
