<template>
  <div class="content">
    <h1>Prepara la maleta</h1>

    <p>Lo que viene no es solo un destino… es una aventura pensada para desconectarnos del caos y reconectar con lo que realmente importa. Así que, necesito que prepares lo siguiente:</p>

    <ul>
      <li>📌 Tu sonrisa</li>
      <li>📌 Ropita cómoda</li>
      <li>📌 Ropita para bañar</li>
      <li>📌 Ropita para frío</li>
      <li>📌 Bloqueador</li>
      <li>📌 Repelente</li>
      <li>📌 Cositas personales</li>
      <li>📌 Mucha creatividad</li>
      <li>📌 Medicina</li>
      <li>📌 Y... muchas ganas de desconectarte del mundo</li>
    </ul>

    <p>Vamos a conectar una noche con la naturaleza y el frío de los ríos.</p>
    <p>No se trata solo de hoy. Se trata de todo lo que viene. Gracias por hacer que el mundo sea más bonito solo con existir.</p>

    <div class="panel">¡Feliz cumpleañosss 🎊!</div>
  </div>

  <div class="page-footer">
    <button @click="$router.push('/step-2')" class="btn-secondary">
      <i class="mdi mdi-chevron-left"></i>
    </button>
    <button @click="$router.push('/')">Volver a empezar</button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content {
  h1 {
    text-align: center;
  }

  .panel {
    margin-top: 35px;
  }
}
</style>
