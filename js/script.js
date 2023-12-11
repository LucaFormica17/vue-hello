const {createApp} = Vue

createApp({
    data(){
        return{
            text: 'messaggio visualizzato'
        }
    }
}).mount('#app')