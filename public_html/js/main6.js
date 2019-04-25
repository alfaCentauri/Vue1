/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vue = new Vue({
    el: '#vue-app',
    data: {
        contador: 0,
    },
    methods:{
        escribir: function(){
            this.contador++;
        },
        mostrar: function(){
            alert('Haz presionado enter');
        }
    }
});

