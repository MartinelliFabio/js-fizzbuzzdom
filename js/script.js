// Creao una variabile result per "immagazzinare" i valori del ciclo
let result = '';
const div = document.querySelector('div.container-fizz-buzz');

// Creao il ciclo for per stampare numeri da 1 a 100
for(let i = 1; i < 101; i++) {

    // Prima condizione per i numeri che sono sia multipli di 3 sia di 5 mi stampi "FizzBuzz"
    if(i % 3 == 0 && i % 5 == 0) {
        result = 'FizzBuzz';
        const fizzbuzz = document.createElement('div');
        fizzbuzz.className = `box--${i}`;
        fizzbuzz.append(`${result} ${i}`);
        div.append(fizzbuzz);
        console.log("FizzBuzz");

    // Seconda condizione per i numeri che sono multipli di 3 mi stampi "Fizz"    
    } else if (i % 3 == 0) {
        result = 'Fizz';
        const fizz = document.createElement('div');
        fizz.className = `box--${i}`;
        fizz.append(`${result} ${i}`);
        div.append(fizz);
        console.log("Fizz");

    // Terza condizione per i numeri che sono multipli di 5 mi stampi "Buzz"        
    } else if (i % 5 == 0) {
        result = 'Buzz';
        const buzz = document.createElement('div');
        buzz.className = `box--${i}`;
        buzz.append(`${result} ${i}`);
        div.append(buzz);
        console.log("Buzz");

    // Else per i restanti numeri        
    } else {
        result = i;
        const element = document.createElement('div');
        element.className = `box--${i}`;
        element.append(`${result}`);
        div.append(element);
        console.log(i);
    }
    
    
}