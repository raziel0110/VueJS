<template>
  <div class="home">
    <appCharacters></appCharacters>
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from '../components/Characters';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    'appCharacters': Characters
  },

  methods: {
   
  }
}
</script>
