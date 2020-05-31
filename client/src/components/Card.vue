<template>
  <div class="card">
    <div class="card-image">
      <img class="profile-pic" :src="profilePic" />
    </div>
    <div class="card-info">
      <div class="card-username">{{ user }}  </div>
      <div class="card-fullname">
        <span>{{full_name}}</span>
      </div>
    </div>
    <!--
    <div class="card-actions">
      <i v-on:click="giveLike(`${pk}`,$event)" class="card-like fa fa-heart fa-10x"></i>
      <span>{{likesCount}} </span>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Card",
  props: ["pk","id", "user", "profilePic", "full_name","likesCount","isClickable"],
  data: () => {
    return {
      isClickable: this.isClickable,
      pk: this.pk,
      id: this.id,
      user: this.user,
      profilePic: this.profilePic,
      full_name: this.full_name,
      likesCount : this.likesCount
    };
  },
  methods: {
    giveLike: function(pk_,e) {
      console.log(typeof this.isClickable)
        if(this.isClickable){
          axios.get(`http://localhost:3000/api/like/${pk_}`).then((response) =>{
            console.log(response)
            this.likesCount +=1
            this.isClickable = false
          }).catch((err) => {
            console.log(err)
          })
        }else{
          alert("No me puedes dar like tantas veces.")
        }
    }
  }
};
</script>

<style scoped>
.card-actions {
  margin-top: 0.3em;
}

.card-like {
  -webkit-text-stroke: 4px #1b1b44;
  color: rgba(0, 0, 0, 0);
  font-size: 25px;
}

.press {
  color: #1b1b44;
}

.card {
  box-shadow: 10px 10px 21px -13px rgba(0,0,0,0.43);
  margin-top: 1em;
  background-color: #474787;
  padding: 0.75em 1.8em 0.8em 0.6em;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}

.card-username {
  color: #8482ec;
  font-weight: 900;
}

.card-fullname {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.profile-pic {
  filter: blur(4px);
  width: 80px;
  border-radius: 40px;
}

.card-info {
  justify-content: flex-start;
  margin: 1.1em 0em 0em 1em;
}
</style>