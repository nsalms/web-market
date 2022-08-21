<template>
  <form class="creation-form" @submit.prevent="addNewProduct({ title, description, imgUrl, price })">

    <!-- Наименование товара -->
    <FormField v-model="title" title="Наименование товара" placeholder="Введите наименование товара" required
      :error="errs.title">
    </FormField>

    <!-- Описание товара -->
    <FormField v-model="description" title="Описание товара" placeholder="Введите описание товара" type="textareaType">
    </FormField>

    <!-- Ссылка на изображение товара -->
    <FormField v-model="imgUrl" title="Ссылка на изображение товара" placeholder="Введите ссылку" required
      :error="errs.imgUrl"></FormField>

    <!-- Цена товара -->
    <FormField v-model="modelPrice" title="Цена товара" placeholder="Введите цену" required :error="errs.price"></FormField>

    <!-- Кнопка: Добавить -->
    <input type="submit" class="creation-form__submit" value="Добавить товар"
      :disabled="(errs['title'] == '' && errs['imgUrl'] == '' && errs['price'] == '') ? false : true">
  </form>
</template>

<script>
import { mapMutations } from "vuex";
import FormField from './FormField.vue';

export default {
  components: { FormField },
  data() {
    return {
      title: "",
      description: "",
      imgUrl: "",
      price: "",
      errs: [],
    }
  },
  methods: {
    ...mapMutations('main', ['addNewProduct']),
  },
  computed: {
    modelPrice: {
      get() {
        return this.price.toLocaleString()
      },
      set(value) {
        this.price = +value.replace(/[^\d]/g, "")
        this.$emit('input', this.price)
      },
    },
  },
  watch: {
    // Валидация полей
    title(value) {
      this.errs['title'] = '';
      if (value === "")
        this.errs['title'] = 'Поле является обязательным';
    },
    imgUrl(value) {
      this.errs['imgUrl'] = '';
      if (value === "")
        this.errs['imgUrl'] = 'Поле является обязательным';
    },
    price(value) {
      this.errs['price'] = '';
      if (value === "")
        this.errs['price'] = 'Поле является обязательным';
    },
  }
}
</script>

<style lang="scss" scoped>
.creation-form {
  padding: 1.5rem;
  background: $body-color;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  // Стили кнопки Добавить
  &__submit {
    margin-top: 0.5rem;
    width: 100%;
    padding: 10px;
    border: 0;
    color: white;
    font-size: 0.75rem;
    background: $primary-color;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    &:hover:enabled {
      background: lighten($primary-color, 5%);
      cursor: pointer;
    }

    &:active:enabled {
      background: darken($primary-color, 5%);
    }

    &:disabled {
      background: grayscale($primary-color);
    }
  }
}
</style>