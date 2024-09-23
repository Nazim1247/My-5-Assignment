// donation button 
document.getElementById('donation-btn').addEventListener('click', function(){
    
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);

    if(!isNaN(donationAmount) && donationAmount > 0){
        console.log('correct');

    const donationBalance = parseFloat(document.getElementById('donation-balance').innerText);
    
     const newBalance = donationAmount + donationBalance;

    document.getElementById('donation-balance').innerText = newBalance.toFixed(2);

    const availableBalanceEl = document.getElementById('available-balance');
    
    const availableBalance = parseFloat(availableBalanceEl.innerText);
    const newAvailableBalance = availableBalance - donationAmount;
    availableBalance.innerText = newAvailableBalance;

    document.getElementById('available-balance').innerText = newAvailableBalance;

    }
    else{
        alert('your donation is not valid');
    }
});


// history
const history = document.getElementById('history');
// donation 
const donation = document.getElementById('donation');

history.addEventListener('click', function(){

    history.classList.add('bg-[#B4F461]');
    history.classList.remove('text-gray-500');

    donation.classList.remove('bg-[#B4F461]');
    donation.classList.add('text-gray-500');

    // donation container 
    document.getElementById('donation-container').classList.add('hidden');

    // calculate history 
    document.getElementById('history-list').classList.remove('hidden');
    
    // historyList
    const historyList = document.createElement('div');
    historyList.innerHTML = `
    <p>${new Date().toLocaleDateString()}</p>
    // <p>Donation: ${donationAmount.toFixed(2)}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyList.appendChild(historyContainer);
 
});

const historyBtn = document.getElementById('history');
const donationBtn = document.getElementById('donation');

donationBtn.addEventListener('click', function(){

    donationBtn.classList.add('bg-[#B4F461]');
    donationBtn.classList.remove('text-gray-500');

    historyBtn.classList.remove('bg-[#B4F461]');
    historyBtn.classList.add('text-gray-500');

    document.getElementById('donation-container').classList.remove('hidden');

    document.getElementById('history-list').classList.add('hidden');
})
