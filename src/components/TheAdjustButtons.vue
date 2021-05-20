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

import { Component, Emit, Vue } from 'vue-property-decorator'


@Component({
  components: {
  }
})

export default class TheAdjustButton extends Vue{
  @Emit()
    clickTop(){ return }
  @Emit()
    clickRight(){ return }
  @Emit()
    clickLeft(){ return }
  @Emit()
    clickBottom(){ return }
}

</script>

<style scoped>
.center{
  text-align: center;
}
</style>