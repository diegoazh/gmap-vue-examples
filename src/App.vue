<script setup lang="ts"></script>

<template>
  <div class="main">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <nav class="menu">
      <RouterLink to="/get-map-promise-composition" class="item"
        >Map Promise - C</RouterLink
      >
      <RouterLink to="/get-map-promise-options" class="item"
        >Map Promise - O</RouterLink
      >
      <RouterLink to="/accessing-google-maps-api-composition" class="item"
        >Google Maps API - C</RouterLink
      >
      <RouterLink to="/accessing-google-maps-api-options" class="item"
        >Google Maps API - O</RouterLink
      >
      <RouterLink to="/autocomplete" class="item">Autocomplete - C</RouterLink>
    </nav>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main {
  width: 80vw;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.item {
  font-size: small;
  font-weight: bold;
  margin-right: 1rem;
  padding: 3px 5px;
  background-color: lightgreen;
  border: solid 1px gray;
  border-radius: 0.5rem;
  color: black;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
}
</style>
