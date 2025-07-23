<template>
    <article
    class="relative w-full"
    >
    <section
    class=" flex bg-(--bg-dark) w-full h-[10vh] p-6  border-b-2 border-(--accent-normal) rounded-b-lg z-10 items-center"
    >
    <h1
    class="text-(--accent-light-active) align-center h-min text-xl md:text-2xl text-bold lg:text-3xl align-center text-center"
    >
        NAUPHILUS
    </h1>
    <div class="ml-4 md:ml-auto h-full flex lg:w-25/100 w-2/3 gap-lg justify-end  items-center">
        <button
        type="button"
        class="min-h-[35px] cursor-pointer mr-2 w-1/2 md:w-30/100 lg:w-45/100 h-full text-(--heading-dark) bg-(--primary-light-hover) text-center rounded-full  border-2 border-(--primary-light-active)"
        @click="showRegister"
        >Sign - In</button>
                <button
                
        class="min-h-[35px] cursor-pointer ml-2 w-1/2 md:w-30/100 lg:w-45/100 h-full text-(--heading-lighter) bg-(--primary-normal-hover) text-center rounded-full  border-2 border-(--primary-normal-active)"
         @click="showLogin"
        >Log - In</button>
    </div>
    </section>

    <div
      class="z-2 top-[11vh] absolute inset-0  pointer-events-none w-full h-[6vh] blur-3xl opacity-70 bg-(--accent-normal)/50"
    />
      
    <section
    class=" relative  flex flex-col items-center bg-(--bg-normal) w-full min-h-[95vh] "
    >
    <InteractiveGridPattern
      :width="40"
      :height="40"
      class-name="absolute inset-0 z-0"
      squares-class-name="fill-current text-gray-300"
    />
    <h2 class="mt-[2vh] mb-[0.2vh] text-xl lg:text-2xl xl:text-4xl text-(--heading-lighter) w-90/100 md:w-90/100  text-center p-1 md:p-2 xl:p-4 z-20">Explora nuestro widget para evaluación de prospectos</h2>
    <p class="mb-[3vh] text-md lg:text-lg xl:text-xl text-(--heading-normal-hover) w-90/100 md:w-2/3  text-center p-1 md:p-2 xl:p-4 z-20" >Para empezar el proceso inicia sesion o registrate, nuestro sistema comenzara la evaluación de manera automatica y te guiara en los siguientes pasos</p>
    <Transition
      name="fade-slide"
  mode="out-in"
    >
  <LoginView v-if="currentView === 'login'" :go-to-register="showRegister" />
  <RegisterView v-else :go-to-login="showLogin" />
    </Transition>

    </section>
    </article>

</template>
<script lang="ts" setup>
import { ref } from 'vue'



const currentView = ref<'login' | 'register'>('login')

function showLogin() {
  currentView.value = 'login'
}
function showRegister() {
  currentView.value = 'register'
}

</script>
<style>

.glowy-effect{
    box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98) !important;
-webkit-box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98) !important;
-moz-box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98);
z-index: 10000;
}

</style>