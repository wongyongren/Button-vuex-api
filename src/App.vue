<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions ,mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["setCurrentJoke"]),
  },
  computed: {
    ...mapGetters(["getOnOffStatus"])
  },  
  mounted() {
    this.setCurrentJoke();
    
    setInterval(this.setCurrentJoke,3000);
    
  },
  updated() {
    this.getOnOffStatus();
    setInterval(this.getOnOffStatus,3000);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 60px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: blue;
}
</style>
