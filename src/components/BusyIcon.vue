<template>
  <div 
    class="busy-icon"
    :style="{
        'border-color': color, 
        'border-top-color': color, 
        'border-bottom-color': color
    }"
/>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
      color: { 
        type: String, 
        default: 'black'
      }
    //msg: {
    //  type: String,
    //  required: true
    //}
  },
  setup: () => {
    // const count = ref(0)
    // return { count }
  }
})
</script>

<style scoped>
.busy-icon {

  display: block;
  height: 30px;
  width: 30px;
  margin-left:auto;
  margin-right:auto;
  /* margin: -25px 0 0 -25px; */
  border: 3px rgba(0, 0, 0, 0.1) solid;
  border-top: 3px black solid;
  border-bottom: 3px black solid;
  border-radius: 50%;
  -webkit-animation: spin1 1s infinite linear;
          animation: spin1 1s infinite linear;
}

@-webkit-keyframes spin1 {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
@keyframes spin1 {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

</style>
