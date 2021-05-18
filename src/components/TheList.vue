<template>
  <div>
    <div class="center">
      <h3>上段</h3>
      <br>
      <v-list>
        <v-list-item>
          <v-list-item-content
              class="col-6"
          >x:</v-list-item-content>
          <v-list-item-content
              class="align-end col-6"
          >
            {{ config_mode_x }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content class="col-6">y:</v-list-item-content>
          <v-list-item-content class="align-end col-6">
            {{ config_mode_y }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <div style="float: right">
      <h5>(×0.1mm)</h5>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TheList',
  props: {
    config_mode_x: {
      type: Number,
      required: true
    },
    config_mode_y: {
      type: Number,
      required: true
    },
    }
})
</script>
<style scoped>
.center{
  text-align: center;
}
</style>


Jot something down










