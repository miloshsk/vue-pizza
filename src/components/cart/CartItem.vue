<template>
  <li class="cart__item">
    <div class="cart__content">
      <h2 class="cart__title">
        {{ item.title | upperCase }} <span>{{ item.size }}</span>
      </h2>
      <span class="cart__cost">
        {{ calcItemCost }}
        <font-awesome-icon icon="ruble-sign" />
      </span>
      <div class="cart__cnt">
        <button class="cart__btn" @click="removeItemFromCart(index)">
          <span class="cart__cnt">-</span>
        </button>
        <span>{{ item.quantity }}</span>
        <button class="cart__btn" @click="addItemToCart(item)">
          <span class="cart__cnt">+</span>
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number
  },
  filters: {
    upperCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  computed: {
    calcItemCost() {
      return this.item.cost * this.item.quantity;
    }
  },
  methods: {
    addItemToCart(item) {
      this.$store.commit("updateCart", item);
    },
    removeItemFromCart(index) {
      this.$store.commit("removeCartItem", index);
    }
  }
};
</script>

<style lang="scss">
.cart {
  max-width: 550px;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__btn {
    width: 25px;
    height: 25px;
    padding: 0;
    border: 1px solid $c-blue;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s ease;
    margin: 0 10px;
    &:hover {
      background-color: $c-blue;
      color: $white;
    }
  }
}
</style>
