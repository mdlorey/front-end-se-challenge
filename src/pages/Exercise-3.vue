<template>
  <!-- You may modify any code above this line -->
  <div class="exercise-3">
    <!-- Please do not modify the code between these comments! -->
    <div class="exercise-3__instructions">
      <h2>
        Exercise 3
      </h2>
      <p>
        For this exercise, you'll create a component (or components) that query a REST API of your choice and render the data you get back. The <code>SOExample</code> component below has been provided as a brief example.
      </p>

      <InfoBox>
        <em>Note:</em> This exercise is more open-ended than the previous exercises. Use this as an opportunity to show off your design chops!
      </InfoBox>

      <ul class="instruction-list ma-auto my-6">
        <strong>To complete this exercise, ensure that you have...</strong>
        <li>
          replaced the <code>SOExample</code> component with your own component
        </li>
        <li>pulled some data from a REST API of your choice</li>
        <li>rendered that data in the mode of your choosing</li>
      </ul>

      <p>
        You may use any publicly-available REST API. Here are some ideas to help you get started.
        <ul>
          <li>
            <a href="https://api.stackexchange.com/docs" target="_blank">Stack Exchange API</a>
          </li>
          <li>
            <a href="https://api.nasa.gov/index.html" target="_blank">NASA Open APIs</a>
          </li>
          <li>
            <a href="https://github.com/r-spacex/SpaceX-API" target="_blank">SpaceX API</a>
          </li>
          <li>
            <a href="https://restcountries.com/" target="_blank">Countries API</a>
          </li>
          <li>
            <a href="https://docs.thedogapi.com/" target="_blank">The Dog API</a>
          </li>
          <li>
            <a href="https://docs.thecatapi.com/" target="_blank">The Cat API</a>
          </li>
        </ul>
      </p>

      <p>
        Modify the following component as you see fit to accomplish the above stories.
      </p>
    </div>
    <!-- Please do not modify the code between these comments! -->

    <!-- You may modify any code beneath this line -->
    <div class="exercise-3__results">
      <BeerFinder />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import BeerFinder from '@/components/Exercise-3/BeerFinder.vue'
  import InfoBox from '@/components/InfoBox.vue'
</script>

<style lang="scss">
.exercise-3__results {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 1px 8px 0 rgba(0, 0, 0, 0.12) !important;
}
</style>
