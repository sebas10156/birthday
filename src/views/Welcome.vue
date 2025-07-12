<template>
  <div class="content">
    <h1>Un día especial merece algo especial</h1>

    <p>Ya se viene tu cumple y no dejo de pensar en lo especial que es ese día… el día en que llegó al mundo alguien que cambió el mío. Me encanta poder estar cerca y disfrutar de todo lo que eres, porque simplemente, eres magia.</p>
    <p>Prepárate para un viaje con destino a tus sonrisas favoritas.</p>
    <p>No sé si alguna vez te lo dije así, pero hay algo en ti que hace que todo se sienta un poquito más bonito, más fácil, más especial. Y ahora que se acerca tu día, no puedo evitar sonreír al pensar en todo lo que significas para mí.</p>
    <p>Espero que disfrutes esta experiencia de poder compartirlo juntos.</p>
  </div>

  <img src="../assets/images/paintings.png" width="100%">

  <div class="page-footer">
    <button @click="$router.push('/step-1')">Continuar</button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content {
  text-align: center;
  margin-bottom: 0;
}

img {
  margin-bottom: 150px;
}
</style>
