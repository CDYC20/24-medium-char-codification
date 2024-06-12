function ascii() {
    // numero = Math.floor(Math.random() * 15000);
    var numero = 0;
    while(numero <= 100){
        numero++
        let caracter = String.fromCharCode(numero);
        console.log(caracter); 
    }
    
}
ascii();


