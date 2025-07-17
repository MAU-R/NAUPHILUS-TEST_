<template>
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'fade', mode: 'out-in' }"/>
  </NuxtLayout>
</template>



<script setup>
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

onMounted(async () => {

  await auth.getApiKeys()

})
</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

html, body, #__nuxt {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

</style>