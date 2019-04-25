/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vue = new Vue({
    el: '#vue-app',
    data: {
        ventas: 30,
        a: 0,
        b: 0,
    },
    methods: {
        sumaA: function(){
            this.a++;
        },
        sumaB: function(){
            this.b++;
        },
        sumarAB: function(){
            console.log('Se sumó a + b.');
            return this.a + this.b;
        }
    },
    computed: {
        sumarVentasA: function(){
            console.log('Se sumo en A');
            return this.a + this.ventas;
        },
        sumarVentasB: function(){
            console.log('Se sumo en B');
            return this.b + this.ventas;
        },
    }
});

