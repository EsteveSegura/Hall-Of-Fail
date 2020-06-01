<template>
  <div>
    <div class="container">
      <div class="erro-mess" v-show="!users">
        CONTENIDO NO DISPONIBLE
        <br />
        <span class="error-mess-min">Prueba buscando algun insulto como: "soy subnormal", "soy gilipollas"..</span>
      </div>
      <div class="item" v-for="(user,index) in users">
        <Card
          :id="user.id"
          :pk="user.pk"
          :user="user.username"
          :full_name="user.full_name"
          :profilePic="user.profile_pic_url"
          :likesCount="user.likesCount || 0"
          :isClickable="true"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import axios from "axios";
import { searchProcess } from "../main";

export default {
  name: "Feed",
  components: {
    Card
  },
  data: () => {
    return {
      users: []
    };
  },
  created() {
    axios.get("/halloffail/api/idiot/").then(result => {
      this.users = result.data.idiots;
      console.log(this.users);
    });

    searchProcess.$on("searchProcess", data => {
      if (!data.message) {
        this.users = false;
        console.log(this.users);
      }
      if (Array.isArray(data.idiots)) {
        this.users = data.idiots;
      }
    });
  }
};
</script>

<style scoped>
.erro-mess {
  margin: 4em 0;
  text-align: center;
  font-weight: 900;
  color: gray;
  font-size: 22px;
}

.error-mess-min{
  margin: 0 0;
  text-align: center;
  font-weight: 900;
  color: gray;
  font-size: 12px;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.item {
  margin: 0em 1.4em;
}
</style>