<template>
  <div class="search-container">
    <input class="input-search" v-model="query" v-on:keyup.enter="search" placeholder="Busqueda..." />
    <button class="btn-search" v-on:click="search()">Buscar</button>
  </div>
</template>

<script>
import axios from "axios";
import { searchProcess } from "../main";
export default {
  name: "SearchBar",
  data: () => {
    return {
      query: ""
    };
  },
  methods: {
    search: function() {
      axios
        .post(`/halloffail/api/idiot/search/`, {
          query: this.query
        })
        .then(response => {
          searchProcess.$emit("searchProcess", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.btn-search {
  box-sizing: inherit;
  font: inherit;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  padding: 15px 32px;
  text-align: center;
  transition-duration: 0.4s;
  margin: 16px 0 !important;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid #6969c0;
  border-radius: 3px;
  background-color: #474787;
  color: white;
}
.search-container {
  margin: 0 auto;
  width: 40%;
  display: flex;
  flex-direction: row;
}
.input-search {
  font: inherit;
  overflow: visible;
  width: 100%;
  margin: 15px 10px 15px 0px;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 20px;
  padding-top: 9px;
  padding-bottom: 9px;
}
</style>