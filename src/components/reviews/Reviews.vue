<template>
  <div class="reviews">
    <div class="container">
      <h1 class="reviews__title">Отзывы</h1>
      <p>Тут вы можете оставить свой отзыв</p>
      <app-reviews-form> </app-reviews-form>
      <ul class="reviews__list">
        <li v-for="(item, key) in reviews" :key="key" class="reviews__item">
          <h2>{{ item.userName }}</h2>
          <p>{{ item.reviewText }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ReviewsForm from "./ReviewsForm.vue";
export default {
  components: {
    appReviewsForm: ReviewsForm
  },
  computed: {
    reviews() {
      return this.$store.getters.getReviews;
    }
  },
  beforeCreate() {
    this.$store.dispatch("loadReviews");
  }
};
</script>

<style lang="scss">
.reviews {
  &__item {
    max-width: 250px;
    width: 100%;
    margin-bottom: 20px;
    border-bottom: 1px solid $black;
  }
}
</style>
