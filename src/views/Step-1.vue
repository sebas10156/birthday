<template>
  <div class="content">
    <h1>Lo que el mundo diría de ti</h1>

    <p>Hoy, si el mundo pudiera hablarte, esto es lo que te diría:</p>

    <ul>
      <li>😁 Gracias por tu risa contagiosa.</li>
      <li>🛩️ Tus ideas hacen del caos algo bello.</li>
      <li>🪐 El universo se viste de fiesta cuando tú cumples años.</li>
    </ul>

    <p>Pero esto es lo que te diría el mundo.</p>

    <h2>Carta:</h2>
    <p>Lo que de verdad quiero es agradecerle al mundo y a la vida por haber traído a alguien como tu. Una mujer con una
      fuerza y una sensibilidad que no se ven todos los días. Inteligente, amorosa, comprometida, con unos valores que
      inspiran y una forma de estar en el mundo que deja huella. Celebrarte no es solo festejar que existes, es
      reconocer lo mucho que significas: para quienes te rodean, para los que aprenden de ti, para los que encuentran en
      tu forma de ser una chispa de esperanza en medio del caos. Celebrarte es también desear que el universo siga
      dándote paciencia, coraje y amor propio, porque lo que viene es grande… y tú también lo eres.</p>
  </div>

  <div class="page-footer">
    <button @click="$router.push('/welcome')" class="btn-secondary">
      <i class="mdi mdi-chevron-left"></i>
    </button>
    <button @click="$router.push('/step-2')">Continuar</button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
