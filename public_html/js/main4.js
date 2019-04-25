/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = new Vue({
    el: "#vue-app",
    data: { 
        name: "Mi Negocio",
        horario: "9:00 am - 6:00 pm",
        ventas: 0,
        x: 0,
        y: 0,
        urlSitioWeb: "https://vuejs.org/v2/guide/",
        etiqueta: "<a href=\"https://www.youtube.com/watch?v=erOMNBT5a4Y&list=PLdWUlk20IaEUKfmCk3duUI2O4nyTlc9-G&index=4\">Otro sitio</a>",
    },
    methods: {
        tipoNegocio: function(){
            return "Servicios de T.I.";
        },
        tipoNegocio2: function(tipo){
            return this.name + " es de tipo " + tipo;
        },
        incrementar: function(valor){
            this.ventas += valor;
        },
        decrementar: function(valor){
            this.ventas -= valor;
        },
        actualizarXY: function(evento){
            this.x = evento.offsetX;
            this.y = evento.offsetY;
        }
    }
});

