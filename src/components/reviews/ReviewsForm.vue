<template>
  <form class="review-form" @submit.prevent="sendReview">
    <div class="review-form__item">
      <input
        v-model="review.userName"
        type="text"
        placeholder="Имя"
        id="review-name"
        class="review-form__input"
      />
    </div>
    <div class="review-form__item">
      <textarea
        v-model="review.reviewText"
        placeholder="Отзыв"
        id="review-text"
        cols="30"
        rows="3"
        class="review-form__input"
      >
      </textarea>
    </div>
    <input type="submit" class="review-form__btn" :disabled="!formReady" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      review: {
        userName: "",
        reviewText: ""
      }
    };
  },
  methods: {
    sendReview() {
      const review = {
        userName: this.review.userName,
        reviewText: this.review.reviewText
      };
      this.$store.dispatch("postReview", review).then(() => {
        this.review.userName = "";
        this.review.reviewText = "";
      });
    }
  },
  computed: {
    emptyFormFields() {
      return {
        name: !this.review.userName,
        test: !this.review.reviewText
      };
    },
    formReady() {
      return Object.values(this.emptyFormFields).every(n => !n);
    }
  }
};
</script>

<style lang="scss">
.review-form {
  max-width: 250px;
  width: 100%;
	&__item {
		margin-bottom: 10px;
	}
	&__input {
		width: 100%;
		border: 1px solid $black;
		padding: 5px;
		font-size: 14px;
		resize: none;
		outline-color: $c-grey;
	}
	&__input::placeholder {
		color: $black;
	}
	&__btn {
		max-width: 120px;
		width: 100%;
		padding: 5px;
		border: 1px solid $black;
		background-color: $white;
		cursor: pointer;
		transition: 0.3s ease;
		&:disabled {
			color: $c-red-light;
			border-color: $c-red-light;
			cursor: not-allowed;
		}
		&:hover:enabled,
		&:focus:enabled {
			background-color: $c-grey;
			color: $white;
		}
	}
}
</style>
