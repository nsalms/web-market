<template>
  <select class="sorting-select" name="select" @change="onChange($event)" v-model="key">
    <option value="default" selected>По умолчанию</option>
    <option value="min">По цене min</option>
    <option value="max">По цене max</option>
    <option value="abc">По наименованию</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      key: "default"
    }
  },
  methods: {
    onChange(event) {
      this.sort(event.target.value)
    },
    sort(method) {
      this.$store.commit('main/sortProducts', method)
    }
  },
  mounted() {
    this.sort(this.key)
  }
}
</script>

<style lang="scss" scoped>
.sorting-select {
  font-size: 0.75rem;
  padding: 0.6rem 1rem;
  background: $body-color;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 0;
  outline: none;
}
</style>