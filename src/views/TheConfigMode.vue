<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="1" />
      <v-col cols="4">
        <the-adjust-buttons />
      </v-col>
      <v-col cols="1" />
      <v-col cols="3">
        <the-list
            :configModeX="x"
            :configModeY="y"
        >
        </the-list>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-btn
          style="margin: 0 auto;"
          @click="toMainView"
      >
        close
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TheAdjustButtons from "@/components/TheAdjustButtons.vue";
import TheList from "@/components/TheList.vue"

export default Vue.extend({
  name: 'TheConfigMode',
  components: {TheList, TheAdjustButtons},
  methods: {
    click_top() {
      this.$store.commit("click_top")
    },
    click_left() {
      this.$store.commit("click_left")
    },
    click_right() {
      this.$store.commit("click_right")
    },
    click_bottom() {
      this.$store.commit("click_bottom")
    },
    toMainView() {
      this.$router.push('/')
    }
  },
  computed: {
    x() {
      return this.$store.state.config_mode_x
    },
    y() {
      return this.$store.state.config_mode_y
    },
  }
})
</script>

<style scoped>
</style>