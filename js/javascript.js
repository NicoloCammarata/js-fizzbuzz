
//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
//Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".






let lista = document.getElementById("lista")
//n.innerHTML = "<li> n </li>"

for (
    n = 1;              
    n <= 100;              
    n++                
) {
    
    console.log(n);

    let divisore = 3;
    let divisore2 = 5;


    if(n % divisore == 0 && n % divisore2 == 0){
        console.log("buzz");
        lista.innerHTML += '<div class="col-2 m-2 bg-warning">' + "elemento " + "fizzbuzz" + "</div>";
       
        
    }
    else if(n % divisore2 == 0){
        console.log("fizz");
        lista.innerHTML += '<div class="col-2 m-2 bg-danger">' + "elemento " + "fizz" + "</div>";
       
        
    }
    else if(n % divisore == 0){
        console.log("buzz");
        lista.innerHTML += '<div class="col-2 m-2 bg-primary">' + "elemento " + "buzz" + "</div>";
       
        
    }
    
    else if(n % divisore2 != 0){
        console.log(n);
        lista.innerHTML += '<div class="col-2 m-2">elemento ' + (n ) + "</div>";
       
        
    }
    
    


    
}










