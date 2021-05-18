<template>
  <div>
    <div class="center">
      <v-btn @click="clickTop">+</v-btn>
    </div>
    <br>
    <div>
      <v-btn
          style="float: left"
          @click="clickLeft"
      >−</v-btn>
      <v-btn
          style="float: right"
          @click="clickRight"
      >+</v-btn>
    </div>
    <br><br>
    <div>
      <div class="center">
        <v-btn @click="clickBottom">-</v-btn>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheAdjustButtons',
  methods: {
    clickTop() {
      this.$emit("clickTop")
    },
    clickLeft() {
      this.$emit("clickLeft")
    },
    clickRight() {
      this.$emit("clickRight")
    },
    clickBottom() {
      this.$emit("clickBottom")
    },
  }
})
</script>

<style scoped>
.center{
  text-align: center;
}
</style>