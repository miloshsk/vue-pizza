<template>
  <footer class="footer">
    <div class="footer__content container">
      <p>
        Created by:
        <a href="https://github.com/miloshsk" class="footer__link">miloshsk</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
.footer {
  background-color: $c-blue;
  color: $white;
  text-align: right;
  &__link {
    display: inline-block;
    color: $c-red-light;
    transition: 0.3s ease;
    &:hover {
      color: $c-red-dark;
    }
  }
}
</style>
