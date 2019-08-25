<template>
  <li class="product">
    <div class="product__item">
      <div>
        <transition name="fade">
          <img :src="showImg" alt="pizza" class="product__img" />
        </transition>
      </div>
      <h2 class="product__title">{{ product.title | upperCase }}</h2>
      <ul class="product__composition">
        <li v-for="(item, key) in product.composition" :key="key">
          <span>{{ item }}</span
          ><span v-if="key + 1 < product.composition.length">,</span>&nbsp;
        </li>
      </ul>
      <div class="product__controls">
        <div class="product__size">
          <button
            v-for="(size, key) in product.size"
            :key="key"
            @click="changeKey(key)"
            class="btn-size"
          >
            {{ size }}
          </button>
          <span :style="changeBtnPosition" class="size-active">{{
            product.size[activeItem]
          }}</span>
        </div>
        <div class="product__cost">
          {{ showCost }}<font-awesome-icon icon="ruble-sign" />
        </div>
        <button class="product__order-btn btn" @click="addToCart">
          <font-awesome-icon icon="shopping-cart"/>
          В корзину
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data() {
    return {
      activeItem: 0
    };
  },
  methods: {
    addToCart() {
      const current = {
        cost: this.product.cost[this.activeItem],
        size: this.product.size[this.activeItem],
        img: this.product.img[this.activeItem],
        title: this.product.title,
        quantity: 1
      };
      this.$store.commit("updateCart", current);
    },
    changeKey(key) {
      this.activeItem = key;
    }
  },
  computed: {
    changeBtnPosition() {
      return { transform: `translateX(${this.activeItem * 100}%)` };
    },
    showCost() {
      return this.product.cost[this.activeItem];
    },
    showImg() {
      return this.product.img[this.activeItem];
    }
  },
  filters: {
    upperCase(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }
};
</script>

<style lang="scss">
.product {
  width: 20%;
  margin-bottom: 20px;
  &__composition {
    display: flex;
    flex-wrap: wrap;
    font-size: $fz-min;
    position: absolute;
  }
  &__item {
    padding: 10px 10px 240px;
    margin-left: 20px;
    position: relative;
  }
  &__img {
    margin: 0 auto;
  }
  &__cost {
    font-size: $fz-xmain;
  }
  &__title {
    margin: 5px 0;
    font-size: $fz-xmain;
  }
  &__controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &__order-btn {
    width: 100%;
  }
  &__size {
    width: 100%;
    display: flex;
    margin-bottom: 5px;
    font-size: 14px;
    position: relative;
    background-color: transparent;
    border: 2px solid $c-blue;
    border-radius: 100px;
    .size-active {
      width: 33.333%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      line-height: 36px;
      border-radius: 100px;
      background-color: $c-blue;
      color: $white;
      border: 1px solid $c-blue;
      transition: 0.3s ease;
      cursor: pointer;
    }
    .btn-size {
      background-color: inherit;
      color: $black;
      flex-grow: 1;
      border-radius: 100px;
      outline: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      transition: 0.3s ease;
    }
  }
}
.fa-ruble-sign {
  font-size: $fz-min;
}
@include media("sm") {
  .product {
    width: 50%;
  }
}
@include media("xs") {
  .product {
    width: 95%;
    &__item {
      padding: 10px 10px 200px;
    }
    &__wrapper {
      text-align: center;
    }
    &__title {
      font-size: $fz-xmain;
    }
    &__cots {
      font-size: $fz-xmin;
    }
    &__order-btn {
      font-size: $fz-main;
      margin-top: 5px;
    }
  }
  .fa-ruble-sign {
    font-size: $fz-min;
  }
}
</style>
