<template>
  <div 
    class="busy-icon"
    :style="{
      'border-top-color': color, 
      'border-right-color': color, 
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
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  margin-left:auto;
  margin-right:auto;
  //margin: -25px 0 0 -25px;
  border: 4px rgba(0, 0, 0, 0.25) solid;
  border-top: 4px black solid;
  border-right: 4px black solid;
  border-bottom: 4px black solid;
  border-radius: 50%;
  -webkit-animation: spin3 1s infinite linear;
          animation: spin3 1s infinite linear;
}

@-webkit-keyframes spin3 {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
@keyframes spin3 {
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
