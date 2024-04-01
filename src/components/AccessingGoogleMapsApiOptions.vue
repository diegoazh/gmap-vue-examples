<template>
  <GmvMap ref="mapRef" class="map" :center="center" :zoom="7" mapId="DEMO_MAP_ID"></GmvMap>
</template>
<script lang="ts">
import { utilities } from '@gmap-vue/v3';

const { getGoogleMapsAPI } = utilities;

export default {
  name: 'your-component-name',
  data() {
    return {
      center: {
        lat: 1.32,
        lng: 103.8,
      },
    };
  },
  computed: {
    // The below example is the same as writing
    // google() {
    //   return getGoogleMapsAPI();
    // },
    google: getGoogleMapsAPI,
  },
  mounted() {
    console.log(this.google);
  }
};
</script>
<style scoped>
.map {
  height: 50vh;
  width: 50vw;
}
</style>