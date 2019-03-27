Vue.component('SGRA-Frontend', {

	template: '#SGRA-template',

	data: () => ({
			posts: []
	}),

	// this is called whenever this component is mounted onto the DOM
	// basically whenever we want to show all the posts, we go and get them
	mounted() {
			this.getPosts();
	},
	methods: {
			getPosts() {
					this.posts = [
							{
									"title": "The first post title!"
							},
							{
									"title": "The second post title!"
							},
							{
									"title": "The third post title!"
							}
					];
			}
	}
});

// Create new Vue instance and mount onto elmement with id app
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})