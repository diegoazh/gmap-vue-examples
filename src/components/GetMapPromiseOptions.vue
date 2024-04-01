<template>
  <GmvMap ref="mapRef" class="map" :center="center" :zoom="7" mapId="DEMO_MAP_ID"></GmvMap>
</template>
<script lang="ts">
import type { MapLayer } from '@gmap-vue/v3/components';
import type { IMapLayerVueComponentExpose } from '@gmap-vue/v3/interfaces';
import { ComponentInstance } from 'vue';

export default {
  data() {
    return {
      center: {
        lat: 1.32,
        lng: 103.8,
      },
    };
  },
  mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    // (this.$refs.mapRef as (typeof MapLayer & IMapLayerVueComponentExpose)).mapPromise
    (this.$refs.mapRef as unknown as ComponentInstance<typeof MapLayer & IMapLayerVueComponentExpose>).mapPromise?.then((map) => {
      if (map) {
        setTimeout(() => {
          map.panTo({ lat: 1.0, lng: 100.0 });
          console.log(this.$refs.mapRef);
        }, 2000);
      }
    });
  },
};
</script>
<style scoped>
.map {
  height: 50vh;
  width: 50vw;
}
</style>
