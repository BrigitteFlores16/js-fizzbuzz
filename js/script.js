 //# TRACCIA 

//*  scrivi un programma che stampi i numeri da 1 a 100,
//*  ma per i multipli di 3 stampi "Fizz"al posto del numero e per i multipli di 5 stampi Buzz 
//*  Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuss.
//*  Prima di partire a scrivere codice poniamoci qualche domanda:
//*  come  faccio a sapere se un numero è divisibile per?
//*  Abbiamo visto qualcosa di particolare che possiamo usare?

// # PROCEDURA

// for da 1 a 100 (incluso)
for (let i=1;i<=100;i++){
    let risultato;
 // se è multiplo di 3 e 5 stampo "FizzBuss"
 if (i%3==0 && i%5==0){
    risultato='FizzBuss';
}
//se il numero è multiplo di 3
else if(i%3==0){
    // allora faccio...
 risultato='Fizz';
}
//se il numero è multiplo di5
else if(i%5==0){
    // allora faccio...
    risultato='Buzz';
}
else{
    risultato=i;
}
console.log(risultato);
}









