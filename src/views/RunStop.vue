<template>
  <div class="status" v-if="!(joke === 1)">
    <span class="text"> stop </span>
  </div>
  <div class="status" v-else>
    <span class="text"> run </span>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({ addJoke: "setCurrentJoke" })

  },
  computed: {
    ...mapGetters({ joke: "getCurrentJoke" })
  }
};
</script>

<style>
.text {
  width: 105px;
  height: 50px;
  margin-left: -20px;
  border: 1px solid #aed581;
  border-radius: 10px;
  z-index: 4;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
