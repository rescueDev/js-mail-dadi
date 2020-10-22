//creo array con lista email

var emailList = ["ciaone@gmail.com" , "velocista99@gmail.com", "cavaldonato77@yahoo.it", "calabrone8@msn.com", "lapoelkan67@aruba.it"];

console.log(emailList);
console.log("Nella lista ci sono attualmente" , emailList.length , "email");


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

/*             var emailArray = emailList[i];
            console.log(emailArray); */

            if (emailInput.value == emailList[i]) {
                console.log("Sei ammesso alla festa")
            }
            else { 
                console.log("Non sei ammesso alla festa")
             
            }

        }
        
    }
)

//output

//dico all'utente se è invitato o meno alla festa