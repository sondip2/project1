// step 01
document.getElementById('btn-cash-out')
.addEventListener('click', function(event){

    event.preventDefault();

    console.log('clicked in logged in ')

    const cashMoney =document.getElementById('cash-out-money').value;
    const cashOutNumber =  parseFloat(cashMoney);
    const pinNumber =document.getElementById('cash-out-pin').value;
    console.log(cashMoney, pinNumber);

    // wrong way to verify the pin number 
    if(pinNumber === '1234'){
        // console.log('reducing the cash money');

        const balance = document.getElementById('account-blance').innerText;
        // console.log(balance);
        const balanceNumber = parseFloat(balance);

        const newBlance = balanceNumber - cashOutNumber;
        // update blane 
        document.getElementById('account-blance').innerText = newBlance;
    }
    else{
        alert('failed in cash out');
    }



})