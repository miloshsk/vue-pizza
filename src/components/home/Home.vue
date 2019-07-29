<template>
  <div class="home">
    <appHomeDescription></appHomeDescription>
    <appHomeSLider></appHomeSLider>
  </div>
</template>

<script>
import HomeSLider from "./HomeSlider.vue";
import HomeDesctiption from "./HomeDesctiption.vue";
export default {
  components: {
    appHomeSLider: HomeSLider,
    appHomeDescription: HomeDesctiption
  }
};
</script>
