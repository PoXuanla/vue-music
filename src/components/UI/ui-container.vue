<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.container {
  width: 100%;
  max-width: 1250px;
  display: flex;
}
</style>
