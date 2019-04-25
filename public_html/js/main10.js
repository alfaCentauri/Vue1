/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vue = new Vue({
    el: '#app',
    data: {
        contador: 0,
    },
    watch: {
        contador: function(){
            var self = this;
            setTimeout(function(){
                self.contador = 0;
            }, 5000);
        }
    }
});

