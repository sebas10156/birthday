<template>
  <div class="content">
    <h1>Tú, en una palabra</h1>
    <p>Si tuviera que describirte en una palabra, diría que eres…</p>

    <div class="UiChips">
      <span class="UiChip">Cariñosa</span>
      <span class="UiChip">Extrovertida</span>
      <span class="UiChip">Romántica</span>
      <span class="UiChip">Amorosa</span>
      <span class="UiChip">Hermosa</span>
      <span class="UiChip">Guerrera</span>
      <span class="UiChip">Única</span>
      <span class="UiChip">Especial</span>
      <span class="UiChip">Comprometida</span>
      <span class="UiChip">Chistosita</span>
      <span class="UiChip">Increíble</span>
      <span class="UiChip">Paz</span>
      <span class="UiChip">Familiar</span>
      <span class="UiChip">Un tesorito</span>
      <span class="UiChip">La mejor</span>
      <span class="UiChip">¡Muy pata!</span>
    </div>
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

.UiChips {
  gap: 12px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;

  .UiChip {
    display: inline;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: var(--ui-surface-0);
    font-size: var(--ui-font-size-small);
  }
}
</style>
