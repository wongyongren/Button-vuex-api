<template >
  <div class="toggle-wrapper">
    <label class="toggle" v-if="loading">
      <input
        type="checkbox"
        :checked="check === true"
        disabled
        @change="
          postStatus($event.target.checked);
          updateStatus(true);
        "
      />
      <span class="toggler round"></span>
    </label>
    <label class="toggle" v-else-if="!(getget === 1)">
      <input
        type="checkbox"
        :checked="check === true"
        @change="
          postStatus($event.target.checked);
          updateStatus(true);
        "
      />
      <span class="toggler round"></span>
    </label>
    <label class="toggle" v-else>
      <input
        type="checkbox"
        :checked="check === true"
        disabled
        @change="postStatus($event.target.checked)"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
//import DisplayStatus from "./DisplayStatus.vue";

export default {
  methods: {
    ...mapActions({ postStatus: "postCurrentId" }),
    ...mapMutations({ updateStatus: "updateSwitch" }),
  },
  computed: {
    ...mapGetters({ getget: "getCurrentJoke" }),
    ...mapGetters({ check: "getOnOffStatus" }),
    ...mapGetters({ loading: "getSwitchStatus" }),
  },
};
</script>

<style>
.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #15202b;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .toggler {
  background: #2196f3;
}
input:focus + toggler {
  box-shadow: 0 0 2px #2196f3;
}

input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.toggler.round {
  border-radius: 34px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>
