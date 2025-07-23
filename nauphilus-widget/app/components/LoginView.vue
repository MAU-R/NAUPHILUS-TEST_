<template>
  <section
    class="min-h-[55vh] z-20 w-90/100 max-w-[1000px] flex flex-col lg:flex-row bg-(--bg-dark-active) rounded-2xl border-2 border-(--accent-normal)"
  >

    <div
      class="w-1/3 md:w-1/2 bg-cover bg-center bg-no-repeat bg-(bg-dark)"
      :style="{ backgroundImage: `url(${bgImage})` }"
    />


    <div class="w-full lg:w-1/2 flex flex-col gap-4 p-4 items-center">
      <div class="flex flex-col justify-center items-center mb-2">
        <h3
          class="text-lg lg:text-2xl xl:text-4xl font-bold text-(--heading-lighter) w-full text-center p-1 md:p-2 xl:p-4"
        >
          Iniciar Sesión
        </h3>
        <p
          class="text-md lg:text-lg xl:text-xl text-(--heading-normal-hover) w-full text-center p-1 md:p-2 xl:p-4"
        >
          Ingresa tus datos para registrarte de manera automatica
        </p>
      </div>

      <UForm :state="loginForm" class="w-full max-w-md space-y-2" @submit.prevent="onLogin">

        <div>
          <label class="block text-sm font-medium mb-1 text-(--accent-light-hover)">Usuario</label>
          <UInput
            v-model="loginForm.email"
            type="email"
            placeholder="Correo electrónico"
            :ui="customInput"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1 text-(--accent-light-hover)">Contraseña</label>
          <UInput
            v-model="loginForm.password"
            type="password"
            placeholder="Contraseña"
            :ui="customInput"
          />
        </div>

        <div class="col-span-2 flex justify-center mt-8">
          <button
            type="submit"
            :disabled="!isFormValid"
            class="w-35/100 rounded-xl self-center p-2 transition-all duration-300 ease-in-out
              text-(--heading-normal) bg-(--primary-normal)/80 hover:border-2 hover:border-(--primary-light-active/80)
              hover:bg-(--primary-dark)
              disabled:opacity-50 disabled:cursor-not-allowed min-w-[150px]"
            @click="onLogin"
          >
            Iniciar sesión
          </button>
        </div>
      </UForm>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import bgImage from '~/assets/img/loginImg.png'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const router = useRouter()
const auth = useAuthStore()

defineProps({
  goToRegister: Function
})

const loginForm = reactive({
  email: '',
  password: ''
})

const customInput = {
  base: 'text-gray-800 font-bold bg-(--accent-light-hover)/80 text-center border-2 border-(--accent-light-active) rounded-lg w-full p-1 font-sans'
}

onMounted(() => {
  if (window.sessionStorage.getItem('forceReloadAfterLogout')) {
    window.sessionStorage.removeItem('forceReloadAfterLogout')
    window.location.reload()
  }
})
const isFormValid = computed(() => {
  return loginForm.email.trim() !== '' && loginForm.password.trim() !== ''
})

function onLogin() {
  if (!isFormValid.value) return

  auth.login({
    apiClientId: loginForm.email,
    apiClientSecret: loginForm.password,
  })

  router.push('/')
}
</script>
