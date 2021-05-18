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
    configModeX:-85,
    configModeY:491,
  },
  mutations: {
    clickTop(state){
      state.configModeY++
    },
    clickLeft(state){
      state.configModeX--
    },
    clickRight(state){
      state.configModeX++
    },
    clickBottom(state){
      state.configModeY--
    },
  },
  actions: {
  },
  modules: {
  }
})
