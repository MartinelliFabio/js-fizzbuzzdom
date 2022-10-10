const div = document.querySelector('div.container-fizzbuzz');


// Creo il ciclo for per stampare numeri da 1 a 100
for(let i = 1; i < 101; i++) {
    // Creo l'elemento div ed lo assegno alla variabile square
    let square = document.createElement('div');

    // Prima condizione per i numeri che sono sia multipli di 3 sia di 5 mi stampi "FizzBuzz"
    if(i % 3 == 0 && i % 5 == 0) {
        square.className = `div-fizzbuzz`;
        square.append(`FizzBuzz`);

        // console.log("FizzBuzz");

    // Seconda condizione per i numeri che sono multipli di 3 mi stampi "Fizz"    
    } else if (i % 3 == 0) {
        square.className = `div-fizz`;
        square.append(`Fizz`);

        // console.log("Fizz");

    // Terza condizione per i numeri che sono multipli di 5 mi stampi "Buzz"        
    } else if (i % 5 == 0) {
        square.className = `div-buzz`;
        square.append(`Buzz`);

        // console.log("Buzz");

    // Else per i restanti numeri        
    } else {
        square.className = `div-element`;
        square.append(i);

        // console.log(i);
    }
    div.append(square);
    
}