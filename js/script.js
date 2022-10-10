// Creao il ciclo for per stampare numeri da 1 a 100
for(let i = 1; i < 101; i++) {

    // Prima condizione per i numeri che sono sia multipli di 3 sia di 5 mi stampi "FizzBuzz"
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    // Seconda condizione per i numeri che sono multipli di 3 mi stampi "Fizz"    
    } else if (i % 3 == 0) {
        console.log("Fizz");
    // Terza condizione per i numeri che sono multipli di 5 mi stampi "Buzz"        
    } else if (i % 5 == 0) {
        console.log("Buzz");
    // Else per i restanti numeri        
    } else console.log(i);
    
}