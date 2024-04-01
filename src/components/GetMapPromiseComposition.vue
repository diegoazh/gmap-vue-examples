<template>
  <GmvMap ref="mapRef" class="map" :center="center" :zoom="7" mapId="DEMO_MAP_ID"></GmvMap>
</template>
<script setup lang="ts">
import { useMapPromise } from '@gmap-vue/v3/composables';
import { onMounted, ref, ComponentInstance } from 'vue';
import type { MapLayer } from '@gmap-vue/v3/components';

const mapRef = ref<ComponentInstance<typeof MapLayer> | null>(null);
const mapPromise = useMapPromise();
const center = {
  lat: 1.32,
  lng: 103.8,
};
onMounted(() => {
  mapPromise?.then((map) => {
    if (map) {
      setTimeout(() => {
        map.panTo({lat: 1.00, lng: 100.00})
        console.log(mapRef.value);
      }, 2000);
    }
  });
});
</script>
<style scoped>
.map {
  height: 50vh;
  width: 50vw;
}
</style>
