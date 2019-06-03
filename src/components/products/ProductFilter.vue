<template>
  <form
    @submit.prevent="showSortedProducts">
    <p class="filter__text">Показать пиццу в которой содержится: </p>
    <div class="filter__labels">
      <label
        v-for="product in products"
        class="filter__label">{{product}}
        <input
          type="checkbox"
          :value="product"
          class="filter_checkbox"
          v-model="selectedProducts">
        <span class="checkmark"></span>
      </label>
    </div>
    <button type="submit" class="filter__submit btn">Показать</button>
  </form>
</template>

<script>
	export default {
		name: "ProductFilter",
    data() {
		  return {
		    products: ['пепперони', 'цыпленок'],
        selectedProducts: []
      }
    },
    methods: {
      showSortedProducts() {
        this.$store.commit({
          type: 'filterProducts',
          value: this.selectedProducts
        })
      }
    }
	}
</script>

<style lang="sass" scoped>
.filter__text
  font-size: 18px
  font-weight: 600
.filter__labels
  margin-bottom: 15px
.filter__label
  font-size: 14px
  position: relative
  padding-right: 25px
  margin-right: 5px
  user-select: none
  cursor: pointer
.filter_checkbox
  position: absolute
  opacity: 0
  height: 0
  width: 0
  cursor: pointer
  &:hover ~ .checkmark
    background-color: #054F6F
  &:checked ~ .checkmark
    background-color: #054F6F
    &:after
      visibility: visible
      opacity: 1
.checkmark
  position: absolute
  top: 0
  right: 0
  height: 20px
  width: 20px
  background-color: #247BA0
  transition: 0.3s ease
  &:after
    content: ''
    position: absolute
    visibility: hidden
    opacity: 0
    transition: 0.3s ease
    left: 6px
    top: 2px
    width: 5px
    height: 10px
    border: solid #fff
    border-width: 0 3px 3px 0
    transform: rotate(45deg)
.filter__submit
  display: block
@media screen and 	(max-width: 450px)
  .filter__labels
    display: flex
    justify-content: space-around
  .filter__submit
    width: 100%
</style>
