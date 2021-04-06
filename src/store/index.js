import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentJoke: "",
    checked: '',
    postId: null,
    lastStatus: '',
    loading: false
  },
  mutations: {
    //syncrous
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
    },
    getLastStatus(state, payload) {
      state.lastStatus = payload;
    },
    updateSwitch(state, payload) {
      state.loading = payload;
      
    },
    // onCurrentStatus(state, payload) {
    //   state.checked = payload;
    //   if (state.checked === true) {
    //     state.checked = true;
    //     this.commit("setCurrentJoke", state.checked);
    //   } else {
    //     state.checked = false;
    //     this.commit("setCurrentJoke", state.checked);
    //   }
    // },
    postCurrentId(state, payload) {
      state.checked = payload;
      if (state.checked === true) {
        state.checked = false;
        this.commit("setCurrentJoke", state.checked);
      } else {
        state.checked = true;
        this.commit("setCurrentJoke", state.checked);
      }
    }
  },
  actions: {
    //asyncronous
    async setCurrentJoke(state) {
      const random = Math.floor(Math.random() * 2);
      const joke = await fetch(`http://localhost:3000/modes/?id=${random}`);
      const j = await joke.json();
      this.totalVuePackages = j[0].id;
      state.commit("setCurrentJoke", j[0].id);
      console.log(this.totalVuePackages);
    },
    async getLastStatus(state) {
      //const random = Math.floor(Math.random() * 2);
      const status = await fetch(`http://localhost:3000/modes`);

      const s = await status.json();

      var lastPosition = s.length - 1;
      this.lastApiValue = s[0].id;
      state.commit("getLastStatus", s[lastPosition].payload);
      console.log('store status ' + s[lastPosition].payload);
      state.commit("updateSwitch", false);
      // console.log('store no ' + lastPosition);
    },
    async postCurrentId(state, payload) {
      // POST request using fetch with async/await
      state.aftercheck = payload;
      const datacheck = { payload };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datacheck)
      };
      const response = await fetch("http://localhost:3000/modes", requestOptions);
      const data = await response.json();
      this.postId = data.payload;
      console.log(state.aftercheck);
      state.commit("postCurrentId", data.payload);
    }
  },
  modules: {},
  getters: {
    getCurrentJoke: state => state.currentJoke,
    getOnOffStatus: state => state.lastStatus,
    getSwitchStatus: state => state.loading
  }
});
