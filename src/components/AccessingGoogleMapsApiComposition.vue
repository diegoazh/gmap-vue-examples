<template>
  <GmvMap ref="mapRef" class="map" :center="center" :zoom="7" mapId="DEMO_MAP_ID"></GmvMap>
</template>
<script setup lang="ts">
import { utilities } from '@gmap-vue/v3';

const center = {
  lat: 1.32,
  lng: 103.8,
};
const { getGoogleMapsAPI } = utilities;
const googleAPI = getGoogleMapsAPI();
console.log(googleAPI);
</script>
<style scoped>
.map {
  height: 50vh;
  width: 50vw;
}
</style>