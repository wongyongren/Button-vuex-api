import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentJoke: "This is a joke",
    allJokes: [],
    checked: '',
    postId: null,
  },
  mutations: {
    //syncrous
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    },
    onCurrentStatus(state, payload) {
      state.checked = payload;
      if (state.checked === true) {
        state.checked = true;
        this.commit("setCurrentJoke", state.checked);
      } else {
        state.checked = false;
        this.commit("setCurrentJoke", state.checked);
      }
    },
    postCurrentId(state, payload){
      state.checked = payload;
      if (state.checked === true) {
        state.checked = true;
        this.commit("setCurrentJoke", state.checked);
      } else {
        state.checked = false;
        this.commit("setCurrentJoke", state.checked);
      }
    }
  },
  actions: {
    //asyncronous
    async setCurrentJoke(state) {
      const random = Math.floor(Math.random() * 2);
      const joke = await fetch(`https://my-json-server.typicode.com/wongyongren/demo/modes/?id=${random}`);
      const j = await joke.json();
      this.totalVuePackages = j[0].id;
      state.commit("setCurrentJoke", j[0].id);
      console.log(this.totalVuePackages);
    },
    async postCurrentId(state,payload) {
      // POST request using fetch with async/await
      state.checked = payload;

      const datacheck= { payload };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datacheck)
      };
      const response = await fetch("https://my-json-server.typicode.com/wongyongren/demo/modes", requestOptions);
      const data = await response.json();
      this.postId = data.id;
      console.log(requestOptions.body)
    }
  },
  modules: {},
  getters: {
    getCurrentJoke: state => state.currentJoke,
    getAllJokes: state => state.allJokes,
    getOnOffStatus: state => state.checked,
  }
});
