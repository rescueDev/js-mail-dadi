//bottone Lancia Dado utente    
var lanciaDado = document.getElementById('lancia-dado');

//variabile vincitore
var winner = document.getElementById('vincitore');

//chiedo all'utente mediante il bottone di generare un numero random lanciando il dado
lanciaDado.addEventListener('click' ,
    function() {
        //numero random utente
        var randomNumberUser = parseInt((Math.floor(Math.random() * 6) + 1));
        console.log("Il tuo numero è:", randomNumberUser);

        //numero random pc
        var randomNumberPc = parseInt((Math.floor(Math.random() * 6) + 1));
        console.log("Il numero del computer è:", randomNumberPc);

        //confronto numeri e decreto vincitore

        if (randomNumberUser > randomNumberPc)  {
            winner.innerHTML = "Hai vinto, grande!";
            console.log("hai vinto tu caro utente");

        }
        else if (randomNumberUser < randomNumberPc) {
            winner.innerHTML = "Hai perso!";
            console.log("Il computer ha vinto");
        }

        else {
            winner.innerHTML = "Pareggio";
            console.log("pareggio");
        }
    }   

)

