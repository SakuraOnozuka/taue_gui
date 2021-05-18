<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="1" />
      <v-col cols="4">
        <the-adjust-buttons
            @click-right="click_right"
            @click-left="click_left"
            @click-top="click_top"
            @click-bottom="click_bottom"
         />
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
      this.$store.commit("clickTop")
    },
    click_left() {
      this.$store.commit("clickLeft")
    },
    click_right() {
      this.$store.commit("clickRight")
    },
    click_bottom() {
      this.$store.commit("clickBottom")
    },
    toMainView() {
      this.$router.push('/')
    }
  },
  computed: {
    x() {
      return this.$store.state.configModeX
    },
    y() {
      return this.$store.state.configModeY
    },
  }
})
</script>

<style scoped>
</style>