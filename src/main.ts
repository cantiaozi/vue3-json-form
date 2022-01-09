import { createApp } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import App from "./App";

// const App = defineComponent({
//   setup() {
//     const nameRef = ref("liuyong");
//     setInterval(() => {
//       nameRef.value += "1";
//     }, 1000);
//     return () => {
//       return h("div", [
//         h("img", {
//           alt: "Vue logo",
//           src: "./assets/logo.png",
//         }),
//         h(HelloWorld, {
//           msg: "Welcome to Your Vue.js + TypeScript App",
//         }),
//         h("div", nameRef.value),
//       ]);
//     };
//   },
// });

createApp(App).mount("#app");
