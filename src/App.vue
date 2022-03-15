<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <button class="button__create" @click="hideDialog">
      Создать сущность +
    </button>
  </div>
  <MyDialog title="Создать" v-model:show="dialogVisible"
    ><PostCreateForm v-model:show="dialogVisible"
  /></MyDialog>
  <PostsList :posts="allPosts" msg="Welcome to My App Vuex 17.02.2022" />
  <Counter />
</template>

<script>
import PostsList from "./components/PostsList.vue";
import Counter from "./components/Counter.vue";
import PostCreateForm from "./components/PostCreateForm.vue";
import MyDialog from "./components/MyDialog.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    PostsList,
    Counter,
    PostCreateForm,
    MyDialog,
  },

  data() {
    return {
      dialogVisible: false,
      title: "",
    };
  },
  computed: { ...mapGetters(["allPosts"]) },
  methods: {
    ...mapActions(["getPosts"]),
    hideDialog() {
      this.dialogVisible = true;
    },
  }, // Вызываю экшн
  async mounted() {
    const limit = 1;
    await this.getPosts(limit);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: azure;
}
.button__create {
  color: blueviolet;
  font-size: 30px;
  background-color: antiquewhite;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  padding: 15px 20px;
}
</style>
