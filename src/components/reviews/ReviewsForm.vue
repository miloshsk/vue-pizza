<template>
  <form class="review-form" @submit.prevent="sendReview">
    <app-input
      v-for="item in review"
      :key="item.name"
      :field="item"
      @isValid="isValid"
      v-model="item.value"
    ></app-input>
    <button
      type="submit"
      class="btn btn_ic review-form__btn"
      :disabled="!formReady"
    >
      Отправить
      <font-awesome-icon icon="comment" class="btn__icon" />
    </button>
  </form>
</template>

<script>
import Input from "./Input";
export default {
  components: {
    appInput: Input
  },
  data() {
    return {
      review: [
        {
          name: "userName",
          title: "Имя",
          value: "",
          pattern: /^[a-zA-Za-яA-Я ]{4,30}$/,
          type: "text",
          class: "input",
          isValid: false
        },
        {
          name: "reviewText",
          title: "Отзыв",
          value: "",
          pattern: /^[a-zA-Za-яA-Я ]{4,30}$/,
          type: "text",
          class: "textarea",
          isValid: false
        }
      ]
    };
  },
  methods: {
    isValid(flag, obj) {
      for (let i of this.review) {
        if (i.name === obj.name) {
          i.isValid = flag;
        }
      }
    },
    sendReview() {
      const review = {
        userName: this.review[0].value,
        reviewText: this.review[1].value
      };
      this.$store.dispatch("postReview", review).then(() => {
        for (let i of this.review) {
          i.value = "";
        }
      });
    }
  },
  computed: {
    formReady() {
      return this.review.map(x => x.isValid).every(n => n);
    }
  }
};
</script>

<style lang="scss">
.review-form {
  max-width: 250px;
  width: 100%;
}
</style>
