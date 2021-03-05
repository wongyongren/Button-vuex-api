<template>
  <div class="status" v-if="!(checked === true)">
    <span class="roundS"></span>
  </div>
  <div class="status" v-else>
    <span class="roundR"></span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ checked: "getOnOffStatus" }),
  },
};
</script>

<style>
.roundR {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #00e676;
  display: inline-block;
  z-index: 5;
}

.roundS {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #ff0000;
  display: inline-block;
  z-index: 5;
}
</style>
