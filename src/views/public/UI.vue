<template>
  <div class="mb-3">
    UI
  </div>
  <hr class="my-3">
  <div>
    <h1>Card</h1>
    <Card>
      This is a card with some content in it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at mattis est. Curabitur non erat convallis, pellentesque elit ut, vulputate dui. Phasellus vehicula aliquet consequat. Duis maximus neque sed pulvinar sollicitudin. Duis nec porttitor diam. Mauris elementum purus tortor, eget finibus lacus malesuada at. Sed vel eleifend erat. Sed quis lobortis libero. Fusce accumsan enim id nisi consectetur, at volutpat ante dictum. Cras in nisi in nunc feugiat viverra sit amet vitae arcu. Aliquam sollicitudin volutpat arcu, sagittis fermentum tellus. Vivamus risus lacus, varius mattis condimentum ut, congue sit amet tortor. Vestibulum sed luctus purus. Suspendisse potenti. Nullam tincidunt condimentum orci, non semper mauris porta eget.
    </Card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Card from '@/components/Card.vue';

export default defineComponent({
  name: 'Home',
  components:{
    Card,
  },
  setup: () => {
    // const count = ref(0)
    // return { count }
  }
})
</script>

<style scoped>
h1{ 
  font-size:1.2em;
  margin-bottom:0.5em;
}
</style>
