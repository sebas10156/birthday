<template>
  <div class="content">
    <h1>Tú, en una palabra</h1>
    <p>Si tuviera que describirte en una palabra…</p>
  </div>

  <div class="page-footer">
    <button @click="$router.push('/step-1')" class="btn-secondary">
      <i class="mdi mdi-chevron-left"></i>
    </button>
    <button @click="$router.push('/finish')">Llegamos al fin...</button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}
</style>
