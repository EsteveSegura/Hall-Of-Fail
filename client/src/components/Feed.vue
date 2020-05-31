<template>
  <div>
    <div class="container">
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
    axios.get("http://girlazo.com/halloffail/api/idiot").then(result => {
      this.users = result.data.idiots;
      console.log(this.users);
    });

    searchProcess.$on("searchProcess", (data) => {
      console.log(data)
      this.users = data.idiots;
    });
  }
};
</script>

<style scope="scoped">
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