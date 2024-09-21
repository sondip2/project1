// console.log('features file added ');
// show the cash out form
document.getElementById('show-cash-out').addEventListener('click', function(){
    console.log('show the cash out button ');
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form

    document.getElementById('add-money-form').classList.add('hidden');
})


// show the aadd money form 
document.getElementById('show-add-money').addEventListener('click', function(){

    document.getElementById('add-money-form').classList.remove('hidden');

    document.getElementById('cash-out-form').classList.add('hidden');
})