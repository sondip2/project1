// console.log('button clicking added');

// search: form submit reloading the  page 

// step - 1.set event handler
document.getElementById('login-btn').addEventListener('click', function(event){
    // step-2: prevent default behavior
    event.preventDefault(); 
    // console.log('login button clicked'); 

    // get the phone number

const phoneNumber = document.getElementById('phone-number').value;

const pinNumber = document.getElementById
('pin-number').value;
// console.log(phoneNumber, pinNumber);

// step4: validate phone and pin
// this is very temporary way 

if(phoneNumber=== '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href ="/home.html";
   
   

}
else{
    alert('wrong phone number or pin');
}



})


