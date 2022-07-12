<template>
  <div class="home-instructions">
    <h2>
      Instructions
    </h2>

    <div class="home-instructions__block">
      <h3>
        Overview
      </h3>
      <p>
        If you've made it this far you've already completed the first step by installing the project dependencies and starting your Vue development server... good job!
      </p>

      <p>
        <strong>
          Please read all instructions carefully before you begin to work on the exercises.
        </strong>
      </p>

      <p>
        To start, this challenge consists of 3 exercises. The goal is to get a sense for how you solve problems and implement your code - these questions are not designed to trick you.
      </p>

      <InfoBox>
        <em>Tip #1:</em> Comments are a great way to explain your thinking and the choices you make as you work on each exercise, particularly in spots where you're less sure of your solution.
      </InfoBox>

      <p>
        No additional packages or libraries are required to complete this challenge but you may add any that you wish. Please do not modify this instructions component (found at <code>/src/pages/HomeInstructions.vue</code>) or any of the instruction text for the exercise (these will be clearly denoted in the code) until your submission has been graded. Any other code (including router, store, styling, and components) are free for you to modify at your discretion.
      </p>

      <InfoBox>
        <em>Tip #2:</em> Be creative! This is an opportunity to express yourself through code and design.
      </InfoBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import InfoBox from '@/components/InfoBox.vue'
</script>

<style lang="scss">
.home-instructions__replace-script-prefix {
  margin-right: 4px;
}

.home-instructions__block {
  margin-bottom: 12px;
}
</style>
