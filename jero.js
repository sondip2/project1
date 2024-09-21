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

    });