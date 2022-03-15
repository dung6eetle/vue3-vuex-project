<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="block" v-for="post in posts" :key="post.id">
    <button @click="deletePost(post)">Delete</button>
    <div class="block__title">{{ post.title }}</div>
    <div class="block__body">{{ post.body }}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PostsList",
  props: {
    msg: String,
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: mapActions(["deletePost"]), // Вызываю экшн
};
</script>

<style scoped>
.block {
  background-color: #2c3e50;
  color: #111;
  font-size: 50px;
  padding: 10px 10px;
  margin-bottom: 20px;
}
.block__title {
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 30px;
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.block__body {
  border-radius: 10px;
  background-color: antiquewhite;
  font-size: 22px;
  margin-top: 20px;
}
</style>
