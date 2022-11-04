<script setup lang="ts">
import uiHeader from "@/layouts/ui-header.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header id="header" class="b-1">
        <ui-header></ui-header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<style scoped>
#header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
}
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
