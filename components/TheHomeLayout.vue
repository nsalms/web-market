<template>
  <div class="row">

    <!-- Sidebar column -->
    <div class="sidebar col-lg-3 col-md-4 col-sm-4 col-xs-12">
      <!-- Form for create a new Product -->
      <CreationForm></CreationForm>
    </div>

    <!-- Main column -->
    <div class="main col-lg-9 col-md-8 col-sm-8 col-xs-12">
      <transition-group name="row" tag="div" class="row">
        <client-only>
          <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12" v-for="productData in getAllProducts" :key="productData.id">
            <ProductCard :id="productData.id" :imgUrl="productData.imgUrl" :title="productData.title"
              :description="productData.description" :price="productData.price"></ProductCard>
          </div>
        </client-only>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CreationForm from '../components/CreationForm.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { CreationForm, ProductCard },
  computed: {
    ...mapGetters('main', ["getAllProducts"]),
  }
}
</script>

<style lang="scss" scoped>
// Transition-group animation
.row {

  &-enter-active,
  &-leave-active {
    transition: all 0.5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: translateY(2rem);
  }
}

.sidebar {
  padding-bottom: 1rem;
}
</style>