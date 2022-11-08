<template lang="">
  <el-card shadow="always" class="card">
    <div class="card-header">
      <span>{{ song.name }}</span>
      <span>{{ song.author.name }}</span>
    </div>
    <img class="card-img" :src="song.image" />
    <div class="card-content">
      <span>Intro</span>
      <div>{{ song.intro }}</div>
    </div>
    <div class="card-tool">
      <el-button type="">
        <span class="material-symbols-outlined"> play_circle </span>
      </el-button>
    </div>
  </el-card>
</template>
<script setup lang="ts">
defineProps({
  song: {},
});
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--el-border-color);
}
.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  height: 80px;
}
.card-tool {
  display: flex;
  justify-content: flex-end;
}
.card {
  width: 300px;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
  }
}
@media screen and (min-width: 600px) and (max-width: 1000px) {
  .card {
    width: 49%;
  }
}
</style>
