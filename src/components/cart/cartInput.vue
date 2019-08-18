<template>
  <div class="form-el">
    <label class="form-el__label">
      <span class="label-text"> Ваше имя</span>
      <input
        v-model="client.name"
        type="text"
        id="order-name"
        class="form-el__input"
      />
    </label>
    <p v-if="errors.name.show" class="order-error">
      {{ errors.name.error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "cartInput"
};
</script>

<style scoped></style>
