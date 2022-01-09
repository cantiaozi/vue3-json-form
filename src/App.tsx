/* eslint-disable */
import { defineComponent, ref } from "vue";
import HelloWorld from "./components/HelloWorld";
const image = require("./assets/logo.png");
export default defineComponent({
  setup() {
    const nameRef = ref("liuyong");
    setInterval(() => {
      nameRef.value += "1";
    }, 1000);
    return () => {
      return (
        <div id="app">
          <img src={image} alt="Vue logo"></img>
          <p>{nameRef.value}</p>
          <HelloWorld age={15} />
          gg
        </div>
      );
    };
  },
});
