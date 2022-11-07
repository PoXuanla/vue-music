<template>
  <div id="header">
    <div class="title"><RouterLink to="/">VueMusic</RouterLink></div>
    <el-dropdown trigger="click">
      <el-avatar :size="30" :src="pictureUrl" class="header-picture" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><RouterLink to="/Login">登入</RouterLink></el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const pictureUrl = ref<string>(
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
);
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
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
.title {
  cursor: pointer;
}
</style>
