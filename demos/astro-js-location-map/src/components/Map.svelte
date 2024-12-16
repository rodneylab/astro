<script lang="ts">
  import { setMap } from "~shared/actions/map";

  let {
    location,
    zoom = 19,
    markerMarkup = "",
  }: {
    location: { latitude: number; longitude: number };
    zoom: number;
    markerMarkup: string;
  } = $props();

  const { latitude, longitude } = location;
</script>

<figure use:setMap={{ latitude, longitude, zoom, markerMarkup }}></figure>

<style>
  figure {
    width: 38rem;
    height: 21rem;
    box-shadow: var(--shadow-elevation-low);
  }
</style>
