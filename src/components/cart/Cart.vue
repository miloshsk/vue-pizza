<template>
  <div class="container">
    <h1>Корзина</h1>
    <ul class="order" v-if="cartItems.length">
      <li
        v-for="(step, key) in stepsItems"
        :key="key"
        :class="[
          {
            'order__step-current active': key <= currentStep
          },
          'order__step'
        ]"
      >
        <font-awesome-icon icon="arrow-right" class="order__arrow" />
        <a href="" class="order__link" @click.prevent="toggleStep(key)">{{
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
    <div v-if="currentStep === 0">
      <div v-if="cartItems.length">
        <app-cart-form></app-cart-form>
        <button @click="nextStep" class="btn btn_order">
          Заказать
          <font-awesome-icon icon="pizza-slice" class="order__icon" />
        </button>
      </div>
      <p v-else class="cart__empty">Корзина пуста</p>
    </div>
    <div v-else-if="currentStep === 1">
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
      currentStep: 0
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.getCartItems;
    }
  },
  methods: {
    toggleStep(step) {
      this.currentStep = step;
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
    border-color: $c-red-light;
  }
  @include media("xs") {
    display: inline-block;
  }
}
.order {
  margin: 20px 0;
  display: flex;
  &__step {
    margin-right: 40px;
    position: relative;
    .order__link {
      color: $c-grey;
      transition: 0.3s ease;
    }
    &:last-child {
      margin-right: 0;
      .order__arrow {
        display: none;
      }
    }
    &.active {
      color: $c-red-light;
      &:hover {
        color: $c-red-dark;
        .order__link {
          color: $c-red-dark;
        }
      }
      .order__link {
        color: $c-red-light;
      }
    }
  }
  &__arrow {
    width: 15px;
    height: 10px;
    position: absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
