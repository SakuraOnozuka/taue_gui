import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message:'message',
    window1:'https://placehold.jp/150x150.png',
    window2:'https://placehold.jp/150x150.png',
    layer:'layer',
    now_layer_model:'上段',
    config_mode_x:-85,
    config_mode_y:491,
  },
  mutations: {
    click_top(state){
      state.config_mode_y ++
    },
    click_left(state){
      state.config_mode_x--
    },
    click_right(state){
      state.config_mode_x++
    },
    click_bottom(state){
      state.config_mode_y--
    },
  },
  actions: {
  },
  modules: {
  }
})
