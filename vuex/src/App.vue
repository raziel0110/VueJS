<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <!-- <appAnother></appAnother> -->
        <appResult></appResult>
        <hr>
        <!-- <appCounter></appCounter> -->
        <appAnotherCounter></appAnotherCounter>
      </div>
    </div>
  </div>
</template>

<script>
import Couter from './components/Counter';
import Result from './components/Result';
import AnotheResult from './components/AnotherResult';
import AnotherCounter from './components/AnotherCounter';

export default {
  name: "App",
  components: {
    'appCounter': Couter,
    'appResult' : Result,
    'appAnother': AnotheResult,
    'appAnotherCounter': AnotherCounter
  },
  data() {
    return {
      
    }
  }
};
</script>

<style>
</style>
