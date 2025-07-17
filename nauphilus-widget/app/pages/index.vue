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
        class=" cursor-pointer mr-2 w-1/2 md:w-30/100 lg:w-45/100 h-full text-(--heading-dark) bg-(--aux-error) text-center rounded-full "
        @click="showRegister"
        >Cerrar Sesion</button>
    </div>
    </section>

    <div
      class="z-2 top-[11vh] absolute inset-0  pointer-events-none w-full h-[6vh] blur-3xl opacity-70 bg-(--accent-normal)/50"
    />
      
    <section
    class=" relative  flex flex-col items-center bg-(--bg-normal) w-full min-h-[95vh] "
    >
      <div
    class="min-h-[55vh] z-20 w-90/100 max-w-[1000px] flex bg-(--bg-dark-active) rounded-2xl border-2 border-(--accent-normal)"
  >
<!--Aqui va el widget-->
</div>
    </section>
    </article>

</template>
<script lang="ts" >
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const router = useRouter()
const auth = useAuthStore()


const currentView = ref<'login' | 'register'>('login')

function logOut(){
auth.logout()
router.push('/login')
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