<template>
  <div>
    <div class="center mt-3">
      <h3>{{this.message}}</h3>
    </div>
    <div class="center mt-3">
      <img
          class="mr-3"
          src="https://placehold.jp/150x150.png"
      >
      <img src="https://placehold.jp/150x150.png">
    </div>
    <div>
      <div class="center mt-3">
        <h4>{{this.layer}}</h4>
      </div>
      <v-btn
          class="mr-3"
          style="float: right"
          @click="toConfigMode"
      >
        config mode
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainView',
  computed: {
    message(){
      return this.$store.state.message
    },
    layer() {
      return this.$store.state.layer
    },
    },
  methods: {
    toConfigMode() {
      this.$router.push('/config_mode')
    }
  }
  })
</script>

<style scoped>
.center{
  text-align: center;
}
</style>