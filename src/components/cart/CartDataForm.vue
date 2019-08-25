<template>
  <form class="order-form" @submit.prevent="makeOrder">
    <app-input
      v-for="item in client"
      :key="item.name"
      :field="item"
      @isValid="isValid"
      v-model="item.value"
    ></app-input>
    <button type="submit" class="btn" :disabled="!formReady">
      Подтвердить данные
    </button>
  </form>
</template>

<script>
import Input from "./../reviews/Input";
export default {
  components: {
    appInput: Input
  },
  props: {
    currentStep: Number
  },
  data() {
    return {
      client: [
        {
          name: "clientName",
          title: "Имя",
          value: "",
          pattern: /^[a-zA-Za-яA-Я ]{4,30}$/,
          class: "input",
          type: "text",
          isValid: false
        },
        {
          name: "clientPhone",
          title: "Телефон",
          value: "",
          pattern: /^((\+7|7|8)+([0-9]){10})$/,
          class: "input",
          type: "tel",
          isValid: false
        },
        {
          name: "clientAdress",
          title: "Адрес",
          value: "",
          pattern: /^[a-zA-Za-яA-Я ]{4,30}$/,
          class: "input",
          type: "text",
          isValid: false
        }
      ]
    };
  },
  methods: {
    isValid(flag, obj) {
      for (let i of this.client) {
        if (i.name === obj.name) {
          i.isValid = flag;
        }
      }
    },
    makeOrder() {
      this.$emit("updateStep", this.currentStep);
      this.$store.commit("clearCart");
    }
  },
  computed: {
    formReady() {
      return this.client.map(x => x.isValid).every(n => n);
    }
  }
};
</script>

<style lang="scss">
.order-form {
  margin-top: 20px;
  max-width: 250px;
  width: 100%;
}
</style>
