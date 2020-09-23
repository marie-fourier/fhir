<template lang="pug">
  pre {{ json }}
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fhir_json']),
    json() {
      if (this.fhir_json)
        return JSON.stringify(this.fhir_json, undefined, 4)
      return '{}'
    }
  },
  mounted() {
    this.$store.commit('GET_FORM_DATA')
  }
}
</script>
<style lang="scss" scoped>
pre {
  text-align: left;
}
</style>