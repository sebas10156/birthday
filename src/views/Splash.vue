<template>
  <div class="state-splash">
    <div class="content">
      <h1>Hello</h1>
      <p><i>Empezamos en {{ counter }}...</i></p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const counter = ref(10)
let interval = null

function counterRedirect() {
  interval = setInterval(() => {
    if (counter.value > 1) {
      counter.value--
    } else {
      clearInterval(interval)
    }
  }, 1000)
}

onMounted(() => counterRedirect())

watchEffect(() => {
  if (counter.value == 1) {
    router.push('welcome');
  }
})
</script>

<style lang="scss" scoped>
.state-splash {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../assets/images/splash.png") center center / cover;

  .content {
    margin-bottom: auto;
    text-align: center;

    p {
      color: var(--ui-color-primary)
    }
  }
}
</style>
