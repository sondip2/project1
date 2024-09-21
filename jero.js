// add money to the account
// step1: add an event handler to the add money button inside the form

// step:2 get money to be added to the account blance 
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        // console.log('add money clicked');
// step 2 get money  to be add to account
        const addMoneyInput = document.getElementById('add-money') .value;
        console.log(addMoneyInput);
        // step3:get the pin provide
        const addPinNumber = document.getElementById('pin-number') .value;
        console.log(addPinNumber);

        // step04;verify pin number 
        if(addPinNumber === '1234'){
            console.log('adding you money to your account ');

// get the current blance step05

const blance = document.getElementById('account-blance') .innerText;
console.log(blance);

// step5: add addMoneyinput with blance 

// const newBlance = blance + addMoneyInput;
const addMoneyNumber = parseFloat(addMoneyInput);
const addBalance = parseFloat(blance);
const newBalance = addMoneyNumber + addBalance;
console.log(newBalance);

// step06; update account blance 
document.getElementById('account-blance').innerText = newBalance;

        }
        else{
            alert('failed you account pin number ')
        }

    });