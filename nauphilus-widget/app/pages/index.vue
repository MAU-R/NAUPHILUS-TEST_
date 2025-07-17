<script setup lang="ts">
import LoginView from '~/components/LoginView.vue';
import RegisterView from '~/components/RegisterView.vue';

</script>

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
        class="mr-2 w-1/2 md:w-30/100 lg:w-45/100 h-full text-(--heading-dark) bg-(--primary-light-hover) text-center rounded-full border-solid border-2 border-(--primary-light-active)"
        >Sign - In</button>
                <button
                
        class="ml-2 w-1/2 md:w-30/100 lg:w-45/100 h-full text-(--heading-lighter) bg-(--primary-normal-hover) text-center rounded-full border-solid border-2 border-(--primary-normal-active)"
        >Log - In</button>
    </div>
    </section>

    <div
      class="z-0 top-[15vh] absolute inset-0  pointer-events-none w-full h-[10vh] blur-3xl opacity-70 bg-(--accent-normal)/50"
    />
      
    <section
    class=" relative  flex flex-col items-center bg-(--bg-normal) w-full h-[90vh] "
    >
    <InteractiveGridPattern
      :width="40"
      :height="40"
      class-name="absolute inset-0 z-0"
      squares-class-name="fill-current text-gray-300"
    />
    <h2 class="mt-[3vh] mb-[0.2vh] text-2xl lg:text-3xl xl:text-5xl text-(--heading-lighter) w-90/100 md:w-90/100  text-center p-1 md:p-2 xl:p-4 z-20">Explora nuestro widget para evaluación de prospectos</h2>
    <p class="mb-[5vh] text-md lg:text-lg xl:text-xl text-(--heading-normal-hover) w-90/100 md:w-2/3  text-center p-1 md:p-2 xl:p-4 z-20" >Para empezar el proceso inicia sesion o registrate, nuestro sistema comenzara la evaluación de manera automatica y te guiara en los siguientes pasos</p>
    <Transition>
    <LoginView v-if="false"/>
    <RegisterView v-else/>
    </Transition>

    </section>
    </article>

</template>
<script lang="ts" >


</script>
<style>

.glowy-effect{
    box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98) !important;
-webkit-box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98) !important;
-moz-box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98);
z-index: 10000;
}

</style>