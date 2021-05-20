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
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheAdjustButtons from "@/components/TheAdjustButtons.vue";
import TheCoordinatesMonitor from "@/components/TheCoordinatesMonitor.vue"

@Component({
  components: {
    TheCoordinatesMonitor,
    TheAdjustButtons
  }
})

export default class TheConfigMode extends Vue {

  get configModeX() {
    return this.$store.state.configModeX
  }
  get configModeY() {
    return this.$store.state.configModeY
  }
  clickTop() {
    this.$store.commit("clickTop")
  }
  clickLeft() {
    this.$store.commit("clickLeft")
  }
  clickRight() {
    this.$store.commit("clickRight")
  }
  clickBottom() {
    this.$store.commit("clickBottom")
  }
  toMainView() {
    this.$router.push('/')
  }
}
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