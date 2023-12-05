
//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
//Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".


let n = 0;

for(n = 0; n < 100 ; n++ ){
    console.log(n)
}

let ndivisore = 3;

let resto = n % ndivisore;
console.log(resto)


if (resto == 0 ){
    n = "buzz"
    console.log(n)
}