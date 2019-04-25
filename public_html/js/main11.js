/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vue = new Vue({
    el: '#app',
    data: {
        showP: true,
    },
    methods: {
        cambiar: function(){
            this.showP = !this.showP;
        }
    },
    computed: {
        
    },
    watch: {
    }
});

