<template>
  <form @submit.prevent="checkCode" class="promo">
    <p class="promo__text">
      Введите промокд "{{ code }}" чтоб получить скидку 10%
    </p>
    <div class="promo__content">
      <label>
        <input
          class="promo__input"
          type="text"
          v-model="userCode"
          placeholder="Введите промокод"
        />
      </label>
      <button type="submit" class="btn promo__submit">применить</button>
    </div>
    <transition name="fade">
      <div class="alert" v-if="showAlertError">{{ messageFalse }}</div>
      <div class="alert alert-success" v-if="showAlertSuccess">
        {{ messageSuccess }}
      </div>
    </transition>
  </form>
</template>

<script>
export default {
  name: "ProductPromo",
  data() {
    return {
      userCode: "",
      code: "pizza",
      showAlertError: false,
      showAlertSuccess: false,
      messageSuccess: "успешно",
      messageFalse: "промокод не подходит"
    };
  },
  methods: {
    checkCode() {
      if (this.userCode.toLowerCase() === this.code) {
        this.$store.commit("updateDiscount");
        this.showAlertSuccess = true;
        setTimeout(() => {
          this.showAlertSuccess = false;
        }, 1200);
      } else {
        this.showAlertError = true;
        setTimeout(() => {
          this.showAlertError = false;
        }, 1200);
      }
      this.userCode = "";
    }
  }
};
</script>

<style scoped lang="scss">
.alert {
  text-align: center;
  max-width: 250px;
  width: 100%;
  padding: 5px;
  background-color: $c-red-light;
  color: $white;
  position: absolute;
  bottom: 0;
  left: 10px;
  border-radius: 25px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid $c-red-light;
  }
  &-success {
    background-color: $c-blue;
    &:before {
      border-bottom: 10px solid $c-blue;
    }
  }
}

.promo {
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;
  position: relative;
  text-align: center;
  &__text {
    font-size: 14px;
  }
  &__content {
    display: flex;
  }
  &__input {
    border: 2px solid $c-blue;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 5px 15px;
    outline: none;
    width: 100%;
  }
  &__input::-webkit-input-placeholder {
    color: $c-blue;
    font-size: 14px;
  }
  &__submit {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
