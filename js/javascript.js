
//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
//Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".






//let lista = document.getElementById("lista")
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
        lista.innerHTML += "<li>" + "elemento " + "fizzbuzz" + "</li>";
       
        
    }
    else if(n % divisore2 == 0){
        console.log("fizz");
        lista.innerHTML += "<li>" + "elemento " + "fizz" + "</li>";
       
        
    }
    else if(n % divisore == 0){
        console.log("buzz");
        lista.innerHTML += "<li>" + "elemento " + "buzz" + "</li>";
       
        
    }
    
    else if(n % divisore2 != 0){
        console.log("fizz");
        lista.innerHTML += "<li>elemento " + (n ) + "</li>";
       
        
    }
    
    


    
}










