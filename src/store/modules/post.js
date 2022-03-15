export default {
  actions: {
    async getPosts(ctx, limit) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      )
      const data = await res.json()
      ctx.commit('updatePosts', data)
      // function User(name, surname) { КАК СОЗДАТЬ ОБЬЕКТ
      //   this.name = name
      //   this.surname = surname
      // }
      // const user = new User('awd', 'Gov')
      // console.log('user', user)

      // КАК ИЗБЕЖАТЬ ССЫЛОЧНОЙ ЗАВИСИМОСТИ
    },
    addNewPost(ctx, newPost) {
      ctx.commit('addNewPost', newPost)
    },
    deletePost(ctx, currentPost) {
      console.log('ctx curr', ctx, currentPost)
      ctx.commit('deletePost', currentPost)
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    addNewPost(state, newPost) {
      state.posts.push(newPost)
    },
    deletePost(state, currentPost) {
      state.posts = state.posts.filter(post => post.title !== currentPost.title)
    },
  },
  state: {
    posts: null,
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
  },
}
