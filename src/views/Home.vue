<template lang="pug">
  form(
    @submit.stop.prevent="onFormSubmit"
    class="form"
  )
    .form-group(:class="{ 'form-group--error': $v.pulse.$error }")
      label.form__label Пульс
      input.form__input(v-model.trim="pulse")
      .error(v-if="!$v.pulse.required") Заполните это поле
    .form-group(:class="{ 'form-group--error': $v.temp.$error }")
      label.form__label Температура
      input.form__input(v-model.trim="temp")
      .error(v-if="!$v.temp.required") Заполните это поле
    .form-group(:class="{ 'form-group--error': $v.oxygen.$error }")
      label.form__label Уровень кислорода
      input.form__input(v-model.trim="oxygen")
      .error(v-if="!$v.oxygen.required") Заполните это поле
    .form-group(:class="{ 'form-group--error': $v.glucose.$error }")
      label.form__label Уровень глюкозы
      input.form__input(v-model.trim="glucose")
      .error(v-if="!$v.glucose.required") Заполните это поле
    .form-group(:class="{ 'form-group--error': $v.pressure_sys.$error }")
      label.form__label Давление Sys
      input.form__input(v-model.trim="pressure_sys")
      .error(v-if="!$v.pressure_sys.required") Заполните это поле
    .form-group(:class="{ 'form-group--error': $v.pressure_dia.$error }")
      label.form__label Давление Dia
      input.form__input(v-model.trim="pressure_dia")
      .error(v-if="!$v.pressure_dia.required") Заполните это поле
    .form-group(:class="{ 'form-group--error': $v.weight.$error }")
      label.form__label Вес
      input.form__input(v-model.trim="weight")
      .error(v-if="!$v.weight.required") Заполните это поле
    .form-group(:class="{ 'form-group--error': $v.height.$error }")
      label.form__label Рост
      input.form__input(v-model.trim="height")
      .error(v-if="!$v.height.required") Заполните это поле
    button(
      type="submit"
      class="form__submit"
    ) Отправить
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'Home',
  data() {
    return {
      pulse: '',
      temp: '',
      oxygen: '',
      glucose: '',
      pressure_sys: '',
      pressure_dia: '',
      weight: '',
      height: '',
    };
  },
  validations: {
    pulse: {
      required,
    },
    temp: {
      required,
    },
    oxygen: {
      required,
    },
    glucose: {
      required,
    },
    pressure_sys: {
      required,
    },
    pressure_dia: {
      required,
    },
    weight: {
      required,
    },
    height: {
      required,
    },
  },
  methods: {
    onFormSubmit() {
      if (this.$v.$invalid) {
        return alert('Пожалуйста, заполните форму');
      }
      this.$store.dispatch('setFormData', {
        pulse: this.pulse, //
        temp: this.temp, //
        oxygen: this.oxygen, //
        glucose: this.glucose, //
        pressure_sys: this.pressure_sys, // 
        pressure_dia: this.pressure_dia, //
        weight: this.weight, //
        height: this.height, //
      });
      this.$router.push({
        name: 'About'
      });
    },
  },
  components: {},
}
</script>
<style lang="scss" scoped>
.form {
  width: 300px;
  margin: 0 auto;
  &__input,
  &__submit {
    font-weight: 300;
    color: #374853;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    background: #fff;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 15px;
}
.form__label {
  margin-bottom: 10px;
}
.error {
  font-size: 12px;
  color: red;
}
</style>