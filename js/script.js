const {createApp} = Vue

createApp({
    data(){
        return{
            text: 'messaggio visualizzato',
            image: './img/Occhio_nocciola.jpg'
        }
    }
}).mount('#app')