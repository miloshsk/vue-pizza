<template>
  <form class="order-form" @submit.prevent="isValidForm">
    <div class="order-form__group">
      <label for="order-name" class="order-form__label">Ваше имя</label>
      <input
        v-model="client.name"
        type="text"
        id="order-name"
        class="order-form__input"
      />
      <p v-if="errors.name.show" class="order-error">
        {{ errors.name.error }}
      </p>
    </div>
    <div class="order-form__group">
      <label for="order-address" class="order-form__label">Ваш адрес</label>
      <input
        v-model="client.adress"
        type="text"
        id="order-address"
        class="order-form__input"
      />
      <p v-if="errors.adress.show" class="order-error">
        {{ errors.adress.error }}
      </p>
    </div>
    <input
      type="submit"
      value="Подтвердить данные"
      class="order-form__submit"
    />
  </form>
</template>

<script>
export default {
  props: {
    currentStep: Number
  },
  data() {
    return {
      client: {
        name: "",
        adress: ""
      },
      errors: {
        name: {
          error: "Заполните имя!",
          show: false
        },
        adress: {
          error: "Заполните адрес!",
          show: false
        }
      }
    };
  },
  methods: {
    isValidForm() {
      let emptyFields = 0;
      for (let i in this.client) {
        if (!this.client[i]) {
          this.errors[i].show = true;
          setTimeout(() => {
            this.errors[i].show = false;
          }, 2000);
          emptyFields++;
        }
      }
      if (!emptyFields) {
        this.$emit("updateCurrentStep", this.currentStep);
        this.$store.commit("clearCart");
      }
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

.order-error {
  margin: 2px 0;
  color: $c-red-light;
}

.order-form__group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.order-form__label {
  margin-bottom: 5px;
}

.order-form__input {
  border: 1px solid $black;
  padding: 3px;
  outline-color: $c-grey;
}

.order-form__submit {
  outline: none;
  max-width: 200px;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  background-color: $white;
  border: 1px solid $black;
  transition: 0.3s ease;
  &:hover {
    background-color: $c-grey;
    color: $white;
    border-color: $c-grey;
  }
  &:focus,
  &:active {
    border-color: $c-grey;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: $white;
    color: $c-grey;
  }
}
</style>
