<template>
  <v-container>
    <v-row class="mt-3">
      <v-col cols="6">
        <div class="adjust-buttons-wrapper">
          <the-adjust-buttons
            @click-right="clickRight"
            @click-left="clickLeft"
            @click-top="clickTop"
            @click-bottom="clickBottom"
         />
        </div>
      </v-col>
      <v-col cols="6">
        <div class="list-wrapper">
          <the-coordinates-monitor
              :config-mode-x="configModeX"
              :config-mode-y="configModeY"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <div class="footer-row">
        <v-btn
            class="btn-close"
            @click="toMainView"
        >
          close
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TheAdjustButtons from "@/components/TheAdjustButtons.vue";
import TheCoordinatesMonitor from "@/components/TheCoordinatesMonitor.vue"

export default Vue.extend({
  name: 'TheConfigMode',
  components: {
    TheCoordinatesMonitor,
    TheAdjustButtons
  },
  methods: {
    clickTop() {
      this.$store.commit("clickTop")
    },
    clickLeft() {
      this.$store.commit("clickLeft")
    },
    clickRight() {
      this.$store.commit("clickRight")
    },
    clickBottom() {
      this.$store.commit("clickBottom")
    },
    toMainView() {
      this.$router.push('/')
    }
  },
  computed: {
    configModeX() {
      return this.$store.state.configModeX
    },
    configModeY() {
      return this.$store.state.configModeY
    },
  }
})
</script>

<style scoped>
.adjust-buttons-wrapper {
  width: 250px;
  margin-left: 20%;
}

.list-wrapper {
  width: 250px;
  margin-right: 20%;
}

.footer-row {
  padding-left: 30px;
}
</style>