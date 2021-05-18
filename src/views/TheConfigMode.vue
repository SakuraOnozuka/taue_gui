<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="1"></v-col>
      <v-col cols="4">
        <the-adjust-buttons></the-adjust-buttons>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="3">
        <the-list
            :config_mode_x="x"
            :config_mode_y="y"
        >
        </the-list>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-btn style="margin: 0 auto;">
        <router-link to="/">close</router-link>
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
.center{
  text-align: center;
}
</style>