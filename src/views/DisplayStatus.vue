<template>
  <div class="row">
    <div class="box">
      <h1>{{ joke }} Mode</h1>
      <div class="status">
        <RedGreenCircle  />
        <RunStop  />
      </div>
      <div class="status">
        <RedGreenCircle  />
        <LocalRemote  />
      </div>
      <SwitchButton  />
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
    SwitchButton
  },
  computed: {
    ...mapGetters({ joke: "getCurrentJoke" })

  }
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
</style>
