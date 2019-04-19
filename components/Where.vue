<template>
  <GmapMap
    :center="{ lat: 11.0, lng: 11.0 }"
    :zoom="7"
    map-type-id="terrain"
    class="map"
  >
    <GmapMarker :position="{ lat: 11.0, lng: 11.0 }" />
  </GmapMap>
</template>

<script>
export default {
  name: 'Where',
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
