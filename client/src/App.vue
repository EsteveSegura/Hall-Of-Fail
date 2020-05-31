<template>
  <div id="app">
    <div class="main">
      <img width="100" alt="Vue logo" src="./assets/logo.png" />
      <Header />
    </div>
    <Feed />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Feed from "./components/Feed.vue";

export default {
  name: "App",
  components: {
    Feed,
    Header
  }
};
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.main {
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #f7f1e3;
  margin-top: 10px;
}

img {
  text-align: center;
}

body {
  background-color: #2c2c54;
}
</style>
