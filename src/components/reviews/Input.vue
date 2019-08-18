<template>
  <div class="form-el">
    <label class="form-el__label">
      <input
        v-if="field.type === 'input'"
        @focus="isLabelActive = true"
        @blur="isLabelActive = false"
        type="text"
        class="form-el__input"
        :value="field.value"
        @input="checkValidValue($event)"
      />
      <textarea
        cols="30"
        rows="3"
        v-else
        @focus="isLabelActive = true"
        @blur="isLabelActive = false"
        type="text"
        class="form-el__input"
        :value="field.value"
        @input="checkValidValue($event)"
      >
      </textarea>
      <span
        :class="[{ focused: isLabelActive || field.value }, 'form-el__text']"
        >{{ field.title }}</span
      >
      <span
        :class="[{ active: showSuccess }, 'form-el__icon form-el__success']"
      >
        <font-awesome-icon icon="check-circle"></font-awesome-icon>
      </span>
      <span :class="[{ active: showError }, 'form-el__icon form-el__error']">
        <font-awesome-icon icon="exclamation-circle"></font-awesome-icon>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    field: Object
  },
  data() {
    return {
      showError: false,
      showSuccess: false,
      isLabelActive: false
    };
  },
  methods: {
    checkValidValue(e) {
      this.$emit("input", e.target.value);
      if (!e.target.value) {
        this.showError = false;
        this.showSuccess = false;
        this.$emit("isValid", this.showSuccess, this.field);
        return;
      }
      if (this.field.pattern.test(e.target.value)) {
        this.showError = false;
        this.showSuccess = true;
      } else {
        this.showError = true;
        this.showSuccess = false;
      }
      this.$emit("isValid", this.showSuccess, this.field);
    }
  }
};
</script>

<style scoped></style>
