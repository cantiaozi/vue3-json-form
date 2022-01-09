import { defineComponent } from "vue";

const propsType = {
  age: {
    type: Number,
    required: true,
  },
} as const;
export default defineComponent({
  props: propsType,
  setup(props) {
    return () => {
      return <div>{props.age}</div>;
    };
  },
});
