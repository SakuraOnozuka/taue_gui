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
      this.$emit("click-top")
    },
    clickLeft() {
      this.$emit("click-left")
    },
    clickRight() {
      this.$emit("click-right")
    },
    clickBottom() {
      this.$emit("click-bottom")
    },
  }
})
</script>

<style scoped>
.center{
  text-align: center;
}
</style>