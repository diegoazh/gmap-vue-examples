import { createGmapVuePlugin } from '@gmap-vue/v3';
import '@gmap-vue/v3/dist/style.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AccessingGoogleMapsApiComposition from './components/AccessingGoogleMapsApiComposition.vue';
import AccessingGoogleMapsApiOptions from './components/AccessingGoogleMapsApiOptions.vue';
import AutocompleteExample from './components/AutocompleteExample.vue';
import GetMapPromiseComposition from './components/GetMapPromiseComposition.vue';
import GetMapPromiseOptions from './components/GetMapPromiseOptions.vue';
import './style.css';

declare global {
  interface Window {
    google: typeof google;

    [key: string | number | symbol]: any;
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/get-map-promise-composition',
      component: GetMapPromiseComposition,
    },
    { path: '/get-map-promise-options', component: GetMapPromiseOptions },
    {
      path: '/accessing-google-maps-api-options',
      component: AccessingGoogleMapsApiOptions,
    },
    {
      path: '/accessing-google-maps-api-composition',
      component: AccessingGoogleMapsApiComposition,
    },
    { path: '/autocomplete', component: AutocompleteExample },
  ],
});

createApp(App)
  .use(router)
  .use(
    createGmapVuePlugin({
      load: {
        key: import.meta.env.VITE_GOOGLE_API_KEY,
        mapIds: ['DEMO_MAP_ID'],
      },
    })
  )
  .mount('#app');
