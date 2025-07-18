export default defineNuxtPlugin(() => {
  if (import.meta.client && !window.NauphilusIframe) {
    // Define widgetShow por si se llama antes de que cargue el script
    window.NauphilusIframe = {
      widgetShow: function (c) {
        this['options'] = c || {};
        this['options']['initNow'] = !![];
        if (this['widgetInitNow']) {
          this['widgetInitNow']();
        }
      }
    }

    // Cargar el script del widget
    const d = document.createElement('script')
    d.type = 'text/javascript'
    d.id = 'Nauphilus'
    d.async = true
    d.src = 'https://www.nauphilus.com/api/widget/nauphilus-widget.js?stamp=' + new Date().getTime()
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode?.insertBefore(d, firstScript)
  }
})