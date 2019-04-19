<template>
  <div
    :style="{
      backgroundColor: backgroundColor,
    }"
    class="loading"
  >
    <div
      :style="{
        borderLeftColor: color,
        animationDuration: '650ms',
        width: size,
        height: size,
      }"
      class="loading-spinner"
    />
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    color: { type: String, default: '#74B758' },
    size: { type: String, default: '90px' },
    backgroundColor: { type: String, default: 'rgba(255, 255, 255, 0.7)' },
  },
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.loading {
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &-spinner {
    border: 5px solid #ccc;
    border-radius: 50%;
    background-size: cover;
    animation: spin 1s linear infinite;
    position: relative;
  }
}
</style>
