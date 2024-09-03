document.addEventListener('DOMContentLoaded', function() {
const error = document.getElementById('erreur-email');
const btn1 = document.getElementById('btn-sub');
const btn2 = document.getElementById('btn-dis');
const cntr1 = document.getElementById('cnt1');
const cntr2 = document.getElementById('cnt2');
const span = document.getElementById('spn');
const input = document.getElementById('inpt');

function valid(event) {
   event.preventDefault();  // Prevent the form from submitting
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (input.value.match(mailformat)) {
       cntr1.style.display = 'none';
       cntr2.style.display = 'grid';
       span.textContent = input.value;
   } else {
       input.style.backgroundColor = "hsl(4, 100%, 90%)";
       input.style.color = "hsl(4, 100%, 67%)";
       input.style.border = "1px solid hsl(4, 100%, 67%)";
       error.textContent = "Valid email required";
   }
}

//function valid(){
  // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //if(input.value.match(mailformat)){
     //cntr1.style.display = 'none';
     //cntr2.style.display = 'grid';
     //span.textContent = input.value;
    //}else{
     //input.style.backgroundColor="hsl(4, 100%, 90%)";
     //input.style.color="hsl(4, 100%, 67%)";
     //input.style.border=" 1px solid hsl(4, 100%, 67%)";
     //error.textContent= "Valid email required";
    //}
//}


function back(){
   cntr1.style.display = 'grid';
   cntr2.style.display = 'none';
}

btn1.addEventListener('click' , valid);
btn2.addEventListener('click' , back);

});