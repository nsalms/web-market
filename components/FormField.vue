<template>
  <div class="form-field">

    <!-- Текстовая этикетка + "звёздочка" обязательного поля -->
    <label class="form-field__label" :for="title">{{ title }}</label><span v-if="required"
      class="form-field__label__dot"></span>

    <!-- Выбор inputType или textareaType в зависимости от типа поля -->
    <input class="form-field__input" :class="!error ? '' : 'form-field__input-error'" v-if="type == 'inputType'"
      type="text" v-on="inputListeners" :value="value" :id="title" :placeholder="placeholder" :required="required">
    <textarea class="form-field__input" :class="!error ? '' : 'form-field__input-error'" v-if="type == 'textareaType'"
      v-on="inputListeners" :id="title" :placeholder="placeholder" rows="6"></textarea>

    <!-- Бейдж ошибки -->
    <span class="form-field__message_error" :style="{ visibility: error ? 'visible' : 'hidden' }">{{ error ? error :
        'ok'
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: [Number, String],
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "inputType"
    },
    error: String
  },
  computed: {
    inputListeners: function () {
      var vm = this;

      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit('input', event.target.value)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-field {

  &__label {
    display: inline-block;
    font-size: 10px;
    margin-bottom: 4px;

    &__dot {
      display: inline-block;
      width: 4px;
      height: 4px;
      margin-bottom: 5px;
      margin-left: 1px;
      border-radius: 100%;
      background: $secondary-color;
    }
  }

  &__input {
    width: 100%;
    font-size: 0.75rem;
    padding: 10px 1rem;
    background: $body-color;
    border: 1px solid $body-color;
    outline: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    appearance: none;

    &::placeholder {
      color: $mute-color;
    }

    &-error {
      color: $secondary-color  !important;
      ;
      border-color: $secondary-color  !important;
    }

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);


    }

    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.2);

      &::placeholder {
        color: inherit;
      }
    }
  }

  textarea {
    resize: none;
  }

  &__message_error {
    font-size: 0.5rem;
    color: $secondary-color;
    display: block;
    margin-top: 4px;
    margin-bottom: 2px;
  }
}
</style>