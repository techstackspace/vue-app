// Composition API
const app = Vue.createApp({
	setup() {
		const message = Vue.ref("This is a new message");
		const count = Vue.ref(0);
		const clickMe = () => {
			console.log("This button was clicked");
			message.value = "Updated message";
		};
		const increment = () => {
			count.value++;
		};
		return {
			message,
			clickMe,
			count,
			increment,
		};
	},
});

app.mount("#app");

// Options Method
// const app = Vue.createApp({
//     data() {
//         return {
//             message: 'This is a new message',
//             count: 0
//         };
//     },
//     methods: {
//         clickMe() {
//             console.log('This button was clicked');
//             this.message = 'Updated message';
//         },
//         increment() {
//             this.count++;
//         }
//     }
// });
