<template>
  <header class="header">
    <h1 class="header__title">Добавление товара</h1>
    <SortingSelect></SortingSelect>
  </header>
</template>

<script>
import SortingSelect from "../components/SortingSelect.vue";

export default {
  components: { SortingSelect },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-weight: 600;
    font-size: 1.75rem;
  }
}
</style>