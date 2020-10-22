//creo array con lista email

var emailList = ["ciaone@gmail.com" , "velocista99@gmail.com", "cavaldonato77@yahoo.it", "calabrone8@msn.com", "lapoelkan67@aruba.it"];

console.log(emailList);
console.log("Nella lista ci sono attualmente" , emailList.length , "email");


//variabile esterna per ciclo
var checkEmail = false;

//creo variabile email inserita nel form
var emailInput = document.getElementById('email-input');

//creo bottone check email lista invitati
var checkButton = document.getElementById('check-email');

var invitatoOmeno = document.getElementById('esito-mail');

//associo al bottone una funzione click che controlli la email.value inserita nel form

checkButton.addEventListener('click' ,
    function () {
        console.log( "Email inserita" , emailInput.value);

        for(var i = 0 ; i < emailList.length ; i++) {
            if (emailInput.value === emailList[i]) {
                checkEmail = true;
            }

            else {
                checkButton = false;
            }

             
        }

//output

//dico all'utente se è invitato o meno alla festa

        if (checkEmail === true) {
            document.getElementById('esito-mail').innerHTML = "Sei ammesso alla festa";
            console.log("Sei ammesso alla festa");
        }
        else {
            document.getElementById('esito-mail').innerHTML = "Non sei ammesso alla festa";
            console.log("Non sei ammesso alla festa");
        }
        
    }
)
