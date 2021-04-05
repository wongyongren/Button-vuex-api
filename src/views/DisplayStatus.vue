<template>
  <div class="row">
    <div class="box">
      <h1>{{ joke }} Mode</h1>
      <div class="status">
        <RedGreenCircle />
        <RunStop />
      </div>
      <div class="status">
        <RedGreenCircle />
        <LocalRemote />
        <div class="lds-ring" >
          <div></div>
          
        </div>
      </div>
      <SwitchButton />
    </div>
  </div>
</template>

<script>
import LocalRemote from "./LocalRemote.vue";
import RunStop from "./RunStop.vue";
import RedGreenCircle from "./RedGreenCircle.vue";
import SwitchButton from "./SwitchButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    LocalRemote,
    RedGreenCircle,
    RunStop,
    SwitchButton,
  },
  computed: {
    ...mapGetters({ joke: "getCurrentJoke" }),
  },
};
</script>

<style>
.status {
  display: flex;
  align-items: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

.box {
  width: 160px;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  background-color: #111516;
  color: #00e676;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.85) !important;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
