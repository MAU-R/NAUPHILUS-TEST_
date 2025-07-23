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
        class=" cursor-pointer mr-2 w-1/2 md:w-30/100 lg:w-45/100 h-full text-(--heading-light-active) bg-(--aux-error) text-center rounded-full min-h-[35px]!"
        @click="logOut"
        >Cerrar Sesion</button>
    </div>
    </section>

    <div
      class="z-2 top-[11vh] absolute inset-0  pointer-events-none w-full h-[6vh] blur-3xl opacity-70 bg-(--accent-normal)/50"
    />
      
    <section
    class="flex flex-col items-center bg-(--bg-normal) w-full min-h-[95vh] justify-center"
    >
      <div
      id="Nauphilus_container2"
    class="p-2  z-20 w-90/100 max-w-[90vw] flex bg-(--bg-dark-active) rounded-2xl border-2 border-(--accent-normal)"
  />
    </section>
    </article>

</template>
<script setup >
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import Swal from 'sweetalert2'

const router = useRouter()
const auth = useAuthStore()
const isLoggingOut = ref(false)
function initNauphilus() {
  const options={
    appendTo: 'Nauphilus_container2',
    width: '100%',
    height: '75vh',

    listener: result => console.log('listener', result),
      errorHandler: async (err) => {
        if (isLoggingOut.value) return
      console.error('Nauphilus error:', err)
      await Swal.fire({
        icon: 'error',
        title: 'Error iniciando widget',
        text: err?.message || 'Ocurrió un error inesperado.',
        confirmButtonText: 'Aceptar',
      })

      try {
        auth.logout()
        window.NauphilusIframe.widgetClose({closeAll:true})
      } catch (logoutErr) {
        console.error('Logout error:', logoutErr)
      } finally {
          
        router.push('/login')
      }
    },

    credentials: {
      membershipKey: auth.membershipKey,
      apiClientID: auth.clientId,
      apiClientSecretKey: auth.user?.apiClientSecret,
    },
    productKey: auth.productKey,
    idProspect: auth.user.apiClientId,
    isNew:true
  }
 console.log(options)
  window.NauphilusIframe.widgetShow({...options})
}


onMounted(async () => {
  await auth.getApiKeys()
    if (!window.NauphilusIframe) {
    const d = document.createElement('script')
    d.type = 'text/javascript'
    d.id = 'Nauphilus'
    d.async = true
    d.src = `https://www.nauphilus.com/api/widget/nauphilus-widget.js?stamp=${new Date().getTime()}`
    document.getElementsByTagName('script')[0].parentNode?.insertBefore(d, document.getElementsByTagName('script')[0])
  }
  const interval = setInterval(() => {
    if (window.NauphilusIframe?.widgetShow) {
      clearInterval(interval)
      initNauphilus()
    }
  }, 100)
})


function logOut(){
  isLoggingOut.value = true
  try{
auth.logout()
window.NauphilusIframe.widgetClose({closeAll:true})
  }catch(err){
    console.error(err)
  }
  finally{
  router.push('/login')
  }

}


onBeforeUnmount(()=>{
  isLoggingOut.value = true
   window.sessionStorage.setItem('forceReloadAfterLogout', '1')
  window.NauphilusIframe.widgetClose({closeAll:true})
})

</script>
<style>

.glowy-effect{
    box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98) !important;
-webkit-box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98) !important;
-moz-box-shadow: -1px 94px 258px -1px rgba(124,58,237,0.98);
z-index: 10000;
}

</style>