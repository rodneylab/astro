<script lang="ts">
  import { setMap } from '../shared/actions/map';

  export let location: {
    latitude: number;
    longitude: number;
  };
  export let zoom: number = 19;
  export let markerMarkup: string = '';

  const { latitude, longitude } = location;
</script>

<figure use:setMap={{ latitude, longitude, zoom, markerMarkup }} />

<style>
  figure {
    width: 38rem;
    height: 21rem;
    box-shadow: var(--shadow-elevation-low);
  }
</style>
