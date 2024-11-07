 import { createStore } from 'vuex'
 import jsonData from  '../components/data/juegos.json'
 export default createStore({
   state: {
     juegos: jsonData
   },
   getters: {
   },
   mutations: {
    changeStockjuegos(state, data) {
        const {codigo,action} = data;
        state.juegos = state.juegos.map(juego => {
            if (juego.codigo === codigo) {
                action === 'sumar' ? juego.stock++ : juego.stock--;
            }
            return juego
        })
        
    }
   },
   actions: {
    async changeStock(context, data) {
        context.commit('changeStockjuegos', data)
    }
   },
   modules: {
   }
 })
