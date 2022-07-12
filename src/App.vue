<template>
  <div id="app" class="app">
    <div class="app__heading">
      <h2>
        Front End Software Engineer Challenge
      </h2>

      <div class="app__navigation">
        <div class="app__navigation-item">
          <router-link :to="{ name: 'instructions' }" exact>
            Instructions
          </router-link>
        </div>
        <div class="app__navigation-item">
          <router-link :to="{ name: 'exercise-1' }">
            Exercise #1
          </router-link>
        </div>
        <div class="app__navigation-item">
          <router-link :to="{ name: 'exercise-2' }">
            Exercise #2
          </router-link>
        </div>
        <div class="app__navigation-item">
          <router-link :to="{ name: 'exercise-3' }">
            Exercise #3
          </router-link>
        </div>
      </div>
    </div>

    <div class="app__router-view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app__heading {
  text-align: center;
}

.app__heading-logo {
  max-width: 200px;
}

.app__navigation {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.app__navigation-item {
  white-space: nowrap;
  .router-link-active {
    color: #2c3e50;
    text-decoration: none;
  }

  &::after {
    content: "|";
    padding: 0 8px;
  }
  &:last-child::after {
    content: none;
  }
}

.app__router-view {
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

a {
  color: #27b1ff;
  font-weight: bold;
}

pre {
  code {
    color: #333;
    display: block;
    font-size: 0.9rem;
  }
}

code {
  background-color: #eee;
  color: crimson;
  padding: 2px 4px;
  border-radius: 4px;
}
</style>