<template>
  <form @submit.prevent="checkCode" class="promo">
    <p class="promo__text">Введите промокд "{{code}}" чтоб получить скидку 10%</p>
    <div class="promo__content">
      <input
        class="promo__input"
        type="text"
        v-model="userCode"
        placeholder="Введите промокод">
      <button
        type="submit"
        class="btn promo__submit">применить</button>
    </div>
    <transition name="fade">
      <div class="alert" v-if="showAlertError">{{messageFalse}}</div>
      <div class="alert alert-success" v-if="showAlertSuccess">{{messageSuccess}}</div>
    </transition>
  </form>
</template>

<script>
	export default {
		name: "ProductPromo",
    data() {
		  return {
		    userCode: '',
        code: 'pizza',
        showAlertError: false,
        showAlertSuccess: false,
        messageSuccess: 'успешно',
        messageFalse: 'промокод не подходит'
      }
    },
    methods: {
      checkCode() {
        if(this.userCode === this.code) {
          this.$store.commit('updateDiscount');
          this.showAlertSuccess = true;
          setTimeout(() => {
            this.showAlertSuccess = false;
          }, 1200)
        }else {
          this.showAlertError = true;
          setTimeout(() => {
            this.showAlertError = false;
          }, 1200)
        }
        this.userCode = '';
      }
    }
	}
</script>

<style scoped lang="sass">
.fade-enter-active
  transition: all .5s ease
.fade-enter
  transform: translateY(-20px)
  opacity: 0
.fade-leave
  opacity: 1
.fade-leave-to
  transition: all .5s ease
  opacity: 0
.alert
  text-align: center
  max-width: 250px
  width: 100%
  padding: 5px
  background-color: #F25F5C
  color: #fff
  position: absolute
  bottom: 0
  left: 10px
  border-radius: 25px
  &:before
    content: ''
    display: block
    position: absolute
    top: -10px
    left: 50%
    transform: translateX(-50%)
    width: 0
    height: 0
    border-left: 10px solid transparent
    border-right: 10px solid transparent
    border-bottom: 10px solid #F25F5C
.alert-success
  background-color: #247BA0
  &:before
    border-bottom: 10px solid #247BA0
.promo
  max-width: 320px
  width: 100%
  margin: 0 auto
  padding-bottom: 40px
  position: relative
  text-align: center
  &__text
    font-size: 14px
  &__content
    display: flex
  &__input
    border: 2px solid #247BA0
    border-top-left-radius: 25px
    border-bottom-left-radius: 25px
    padding: 5px 15px
    outline: none
    width: 100%
  &__input::-webkit-input-placeholder
    color: #247BA0
    font-size: 14px
  &__submit
    border-top-right-radius: 25px
    border-bottom-right-radius: 25px

</style>
