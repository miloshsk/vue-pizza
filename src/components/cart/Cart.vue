<template>
  <div class="container">
    <h1>Корзина</h1>
    <ul class="order" v-if="cartItems.length">
      <li
        v-for="(step, key) in stepsItems"
        :key="key"
        class="order__step"
        :class="{ 'order__step-current': step <= currentStep }"
      >
        <a href="" class="order__link" :class="{ active: currentStep > key }">{{
          step
        }}</a>
      </li>
    </ul>
    <router-link
      to="/products"
      tag="a"
      class="header-menu__link"
      active-class="header-menu__link-active"
      exact
    >
      Вернуться в меню
    </router-link>
    <div v-if="currentStep === 1">
      <div v-if="cartItems.length">
        <app-cart-form></app-cart-form>
        <button @click="nextStep" class="cart__btn-order">Заказать</button>
      </div>
      <p v-else class="cart__empty">Корзина пуста</p>
    </div>
    <div v-else-if="currentStep === 2">
      <button @click="prevStep" class="order-btn-back">
        Назад
      </button>
      <app-cart-dataForm
        :currentStep="currentStep"
        @updateCurrentStep="nextStep"
      ></app-cart-dataForm>
    </div>
    <div v-else>
      <p class="order-done">Заказ принят</p>
    </div>
  </div>
</template>

<script>
import CartDataForm from "./CartDataForm.vue";
import CartForm from "./CartForm.vue";
export default {
  components: {
    appCartDataForm: CartDataForm,
    appCartForm: CartForm
  },
  data() {
    return {
      stepsItems: ["Товары в корзине", "Оформление заказа", "Заказ принят"],
      steps: [1, 2, 3],
      currentStep: 1
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.getCartItems;
    }
  },
  methods: {
    prevStep() {
      this.currentStep--;
    },
    nextStep() {
      this.currentStep++;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-menu__link {
  display: none;
  color: #000;
  max-width: 200px;
  width: 100%;
  text-align: center;
  border: 3px solid #000;
  outline: none;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 15px;
  &:hover {
    color: #000;
  }
  &:focus {
    border-color: #f25f5c;
  }
  @include media("xs") {
    display: inline-block;
  }
}
.order {
  margin: 20px 0;
  display: flex;
  &__step {
    margin-right: 20px;
    position: relative;
    &:last-child {
      margin-right: 0;
    }
  }
  &__link {
    color: $c-grey;
    &.active {
      color: $c-red-light;
    }
  }
}
</style>