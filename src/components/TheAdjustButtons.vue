<template>
  <div>
    <div class="center">
      <v-btn @click="click_top">+</v-btn>
    </div>
    <br>
    <div>
      <v-btn
          style="float: left"
          @click="click_left"
      >−</v-btn>
      <v-btn
          style="float: right"
          @click="click_right"
      >+</v-btn>
    </div>
    <br><br>
    <div>
      <div class="center">
        <v-btn @click="click_bottom">-</v-btn>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheAdjustButtons',
  methods: {
    click_top() {
      this.$emit("click_top")
    },
    click_left() {
      this.$emit("click_left")
    },
    click_right() {
      this.$emit("click_right")
    },
    click_bottom() {
      this.$emit("click_bottom")
    },
  }
})
</script>

<style scoped>
.center{
  text-align: center;
}
</style>