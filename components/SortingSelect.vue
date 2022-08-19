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
  padding: 10px 1rem;
  padding-right: 2rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid $body-color;
  outline: none;
  color: $mute-color;
  appearance: none;


  background: $body-color url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264' stroke='%23B4B4B4'/%3E%3C/svg%3E%0A") no-repeat;
  background-position: right 1rem top 50%;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: inherit;
  }
}
</style>