<template>
  <section
    class="min-h-[55vh] z-20 w-90/100 max-w-[1000px] flex bg-(--bg-dark-active) rounded-2xl border-2 border-(--accent-normal)"
  >
    <div
      class="w-1/2 bg-cover bg-center bg-no-repeat bg-(bg-dark)"
      :style="{ backgroundImage: `url(${bgImage})` }"
    />
    <div class="w-1/2 flex flex-col gap-4 p-2 px-4 items-center">
      <div class="flex-flex-col justify-center items-center mb-2">
        <h3
          class="text-lg lg:text-2xl xl:text-4xl font-bold text-(--heading-lighter) w-full text-center p-1 md:p-2 xl:p-4 z-20"
        >
          Iniciar Sesión
        </h3>
        <p
          class="text-md lg:text-lg xl:text-xl text-(--heading-normal-hover) w-full text-center p-1 md:p-2 xl:p-4 z-20"
        >
          Ingresa tus credenciales e inicia sesión para comenzar con el proceso de evaluación
        </p>
      </div>

      <UForm class="w-full max-w-md space-y-2" @submit.prevent="onLogin">
        <div class="mb-6">
         <label
            class="block text-sm font-medium mb-1 text-(--accent-light-hover)"
          >
           Usuario
        </label>
                <UInput
          v-model="loginForm.email"
          type="email"
          placeholder="Correo electrónico"
          :ui="customInput"
        />
        </div>
        <div>
         <label
            class="block text-sm font-medium mb-1 text-(--accent-light-hover)"
          >
           Contraseña
        </label>
        <UInput
          v-model="loginForm.password"
          type="password"
          placeholder="Contraseña"
          :ui="customInput"
        />
        </div>

               <div
        class="col-span-2 flex justify-center mt-8"
        >
            <button
        type="submit"
        class="w-35/100 rounded-xl bg-(--primary-normal)/80 text-(--heading-normal) self-center p-2 hover:border-2 hover:border-(--primary-light-active/80) hover:bg(--primary-dark) transition-all duration-300 ease-in-out"
        @click="onLogin"
        >
        registrarse
        </button>
    </div>
      </UForm>

      <div class="text-sm text-center text-(--heading-normal-hover) mt-auto mb-4">
        ¿No tienes cuenta?
        <a href="#" class="underline hover:text-(--primary-dark) text-(--primary-normal)" @click.prevent="goToRegister">
    Regístrate aquí
  </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import bgImage from '~/assets/img/loginImg.png'

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

function onLogin() {
  console.log('Login con:', loginForm)
}
</script>
