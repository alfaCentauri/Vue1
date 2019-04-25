/* 
 * Prueba de Vue
 */
/* Instancia de código */
var app = new Vue({
    el: "#vue-app",
    data: { name: "Hola mundo desde Vue." }
});
/**Ejemplo 2*/
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Tu página fue cargada el ' + new Date().toLocaleString()
  }
})