<template>
  <div class="container">
    <div>
      Write your name here:
      <input v-model="name" />
    </div>
    <div>
      <label for="checkbox-reverse">
        Show name your in reverse:
        <input id="checkbox-reverse" type="checkbox" v-model="showReverse" />
      </label>
    </div>

    <Reverser v-if="showReverse" v-bind:childProps="{ name }" />
  </div>
</template>

<script>
import Reverser from "plutt-component/build/proxy/vue.js";

export default {
  name: "App",
  components: {
    Reverser: Reverser,
  },
  data: function() {
    return {
      name: "",
      showReverse: false,
    };
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-align: center;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
  font-size: 25px;
  max-width: 100%;
}

.container {
  padding: 10px;
  border: 3px solid black;
  margin: 0 10px;
}

.container > * {
  margin: 15px 0;
}
</style>
