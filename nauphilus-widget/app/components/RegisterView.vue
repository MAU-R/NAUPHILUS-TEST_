<template>
  <section
    class="mb-[5vh] z-20 min-h-[55vh] w-full max-w-[1100px] bg-(--bg-normal-active) rounded-2xl border-2 border-(--accent-normal) flex flex-col items-center mx-auto px-4"
  >
    <div class="flex flex-col justify-center items-center w-full mt-4">
      <h3
        class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-(--heading-lighter) text-center p-2 xl:p-4"
      >
        Regístrate
      </h3>
      <p
        class="text-sm sm:text-base md:text-lg lg:text-xl text-(--heading-normal-hover) text-center p-2 xl:p-4"
      >
        Ingresa tus credenciales e inicia sesión para comenzar con el proceso de evaluación
      </p>
    </div>

    <div class="w-full max-w-4xl pb-8">
      <UForm
        :state="form"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-6 w-full"
        @submit.prevent="onSubmit"
      >
        <div v-for="field in fields" :key="field.name">
          <label
            :for="field.name"
            class="block text-sm font-medium mb-1 text-(--accent-light-hover)"
          >
            {{ field.label }}
          </label>
          <UInput
            v-if="field.type !== 'select'"
            :id="field.name"
            v-model="form[field.name]"
            :type="field.type"
            :placeholder="field.label"
            :ui="customInput"
          />
          <USelect
            v-else
            :id="field.name"
            v-model="form[field.name]"
            :options="[]"
            :placeholder="field.label"
            :ui="customInput"
          />
        </div>

        <div class="col-span-1 md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            class="disabled w-2/3 sm:w-1/2 md:w-1/3 rounded-xl bg-(--primary-normal)/80 text-(--heading-normal) p-2 hover:border-2 hover:border-(--primary-light-active/80) hover:bg-(--primary-dark) transition-all duration-300 ease-in-out"
            disabled:true
            @click="onSubmit"
          >
            Registrarse
          </button>
        </div>
      </UForm>
    </div>

    <div class="text-sm text-center text-(--heading-normal-hover) mt-auto mb-4">
      ¿Ya tienes cuenta?
      <a
        href="#"
        class="underline hover:text-(--primary-dark) text-(--primary-normal)"
        @click.prevent="goToLogin"
      >
        Inicia sesión aquí
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Swal from 'sweetalert2'

onMounted(() => {
  Swal.fire({
    title: 'Funcionalidad no disponible',
    text: 'El registro de usuarios aún no está habilitado.',
    icon: 'info',
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#7c3aed'
  })
})

defineProps({
  goToLogin: Function
})

const form = reactive({
  email: '',
  razonSocial: '',
  name: '',
  phone: '',
  password: '',
  rfc: '',
  birthdate: '',
  birthPlaceId: '',
  gender: '',
  curp: ''
})

const fields = [
  { name: 'email', label: 'Correo electrónico', type: 'email' },
  { name: 'razonSocial', label: 'Razón social', type: 'text' },
  { name: 'name', label: 'Nombre completo', type: 'text' },
  { name: 'phone', label: 'Teléfono', type: 'tel' },
  { name: 'password', label: 'Contraseña', type: 'password' },
  { name: 'rfc', label: 'RFC', type: 'text' },
  { name: 'birthdate', label: 'Fecha de nacimiento', type: 'date' },
  { name: 'birthPlaceId', label: 'Lugar de nacimiento', type: 'select' },
  { name: 'gender', label: 'Género', type: 'text' },
  { name: 'curp', label: 'CURP', type: 'text' }
]

const customInput = {
  base:
    'text-gray-800 font-bold bg-(--accent-light-hover)/80 text-center border-2 border-(--accent-light-active) rounded-lg w-full p-1 font-sans'
}

function onSubmit() {
  console.log('Formulario enviado:', form)
}
</script>
