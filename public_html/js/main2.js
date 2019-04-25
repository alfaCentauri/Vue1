/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = new Vue({
    el: "#vue-app",
    data: { 
        name: "Mi Negocio.",
        horario: "9:00 am - 6:00 pm",
    },
    methods: {
        tipoNegocio: function(){
            return "Servicios de T.I.";
        },
        tipoNegocio2: function(tipo){
            return this.name + " es de tipo " + tipo;
        }
    }
});

