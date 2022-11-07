<script setup lang="ts">
import uiHeader from "@/layouts/ui-header.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="bb-1">
        <ui-header></ui-header>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-picture {
  cursor: pointer;
}
</style>
