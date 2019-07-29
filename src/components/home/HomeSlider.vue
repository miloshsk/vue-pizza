<template>
  <swiper :options="swiperOption" ref="mySwiper" class="stock-slider">
    <swiper-slide
      v-for="slide in slides"
      :key="slide.id"
      class="stock-slider__el"
    >
      <div class="stock-slider__img">
        <img :src="slide.img" alt="stock" />
      </div>
    </swiper-slide>
    <div class="swiper-button swiper-button-prev" slot="button-prev">
      <font-awesome-icon icon="chevron-left" class="swiper-button__icon" />
    </div>
    <div class="swiper-button swiper-button-next" slot="button-next">
      <font-awesome-icon icon="chevron-right" class="swiper-button__icon" />
    </div>
  </swiper>
</template>

<script>
export default {
  name: "HomeSlider",
  data() {
    return {
      slides: [
        {
          id: 1,
          img: "https://via.placeholder.com/1600x750"
        },
        {
          id: 2,
          img: "https://via.placeholder.com/1600x750"
        },
        {
          id: 3,
          img: "https://via.placeholder.com/1600x750"
        }
      ],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style scoped lang="scss">
.swiper-button {
  background: none;
  width: 50px;
  height: 50px;
  color: $c-blue;
  transition: 0.3s ease;
  &__icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  &:hover,
  &:focus,
  &:active {
    color: $c-blue-dark;
  }
}
.stock-slider {
  position: relative;
  width: 100%;
  height: 400px;
  &__img {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @include media("sm") {
    height: 300px;
  }
  @include media("xs") {
    height: 200px;
    .swiper-button {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
