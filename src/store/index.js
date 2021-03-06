import { createStore } from 'vuex'

export default createStore({
  state: {
    registros:[],
    registro:{
      id: '',
      correo: '',
      rut: '',
      telefono: '',
      rol: '',
      carrera: [],
      password: '',
    },
  },
  getters: {
  },
  mutations: {
    set(state, payload){
      state.registros.push(payload);
      
    },
    cargar(state, payload){
      state.registros = payload;
    }
  },
  actions: {
    async setRegistros({ commit }, registro){
      try {
        const res = await fetch(`https://pp-face-default-rtdb.firebaseio.com/registros/${registro.id}.json`,{
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registro)
        });
        const  dataBD = await res.json();
      } catch (error) {
        console.log(error);
      }
      commit('set', registro);
    },
    async cargarLocalStorage({commit}){
      try {
        const res = await fetch('https://pp-face-default-rtdb.firebaseio.com/registros.json');
        const dataBD = await res.json();
        const arrayRegistro = [];
        //console.log(dataBD);
        for(let id in dataBD){
          //console.log(id);
          //console.log(dataBD[id]);
          arrayRegistro.push(dataBD[id])
        }
        console.log(arrayRegistro);
        commit('cargar', arrayRegistro)

      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
