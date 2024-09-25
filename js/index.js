
// blog btn 
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'home.html';
});

// donation button 
document.getElementById('donation-btn').addEventListener('click', function(){
    
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);
    const availableBalance = parseFloat(document.getElementById('available-balance').innerText);
    const donationBalance = parseFloat(document.getElementById('donation-balance').innerText);

    if(!isNaN(donationAmount) && donationAmount > 0 && availableBalance > donationAmount){
        
     const newBalance = donationAmount + donationBalance;
    document.getElementById('donation-balance').innerText = newBalance.toFixed(2);

    const newAvailableBalance = availableBalance - donationAmount;
    document.getElementById('available-balance').innerText = newAvailableBalance.toFixed(2);

    // historyList
    const historyList = document.createElement('div');
    historyList.innerHTML = `
    <p class ="text-xl font-bold">${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p class ="text-gray-400">${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.appendChild(historyList);

    // modal
    document.getElementById('my_modal_1');
    my_modal_1.showModal();
    }
    else{
        alert('Your Donation is not valid');
    }
});

// donation button 2
document.getElementById('donation-btn2').addEventListener('click', function(){
    const donationAmount2 = parseFloat(document.getElementById('donation-amount2').value);
    const donationBalance2 = parseFloat(document.getElementById('donation-balance2').innerText);
    const availableBalance2 = parseFloat(document.getElementById('available-balance').innerText);
    if(!isNaN(donationAmount2) && donationAmount2 > 0 && availableBalance2 > donationAmount2){
        const newBalance2 = donationAmount2 + donationBalance2;
        document.getElementById('donation-balance2').innerText = newBalance2.toFixed(2);
        const newAvailableBalance2 = availableBalance2 - donationAmount2;
        document.getElementById('available-balance').innerText = newAvailableBalance2.toFixed(2);
        // historyList
    const historyList = document.createElement('div');
    historyList.innerHTML = `
    <p class ="text-xl font-bold">${donationAmount2} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
    <p class ="text-gray-400">${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.appendChild(historyList);
    // modal
    document.getElementById('my_modal_1');
    my_modal_1.showModal();
     }else{
        alert('Your Donation is not valid');
    }; 
});

// donation button 3
document.getElementById('donation-btn3').addEventListener('click', function(){
    const donationAmount3 = parseFloat(document.getElementById('donation-amount3').value);
    const donationBalance3 = parseFloat(document.getElementById('donation-balance3').innerText);
    const availableBalance3 = parseFloat(document.getElementById('available-balance').innerText);
    if(!isNaN(donationAmount3) && donationAmount3 >0 && availableBalance3 > donationAmount3){
        const newBalance3 = donationBalance3 + donationAmount3;
        document.getElementById('donation-balance3').innerText = newBalance3.toFixed(2);
        const newAvailableBalance3 = availableBalance3 - donationAmount3;
        document.getElementById('available-balance').innerText = newAvailableBalance3.toFixed(2);
        // historyList
    const historyList = document.createElement('div');
    historyList.innerHTML = `
    <p class ="text-xl font-bold">${donationAmount3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class ="text-gray-400">${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.appendChild(historyList);
    // modal
    document.getElementById('my_modal_1');
    my_modal_1.showModal();
    }else{
        alert('Your Donation is not valid');
    };
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
});


// donationBtn
const historyBtn = document.getElementById('history');
const donationBtn = document.getElementById('donation');

donationBtn.addEventListener('click', function(){

    donationBtn.classList.add('bg-[#B4F461]');
    donationBtn.classList.remove('text-gray-500');

    historyBtn.classList.remove('bg-[#B4F461]');
    historyBtn.classList.add('text-gray-500');

    document.getElementById('donation-container').classList.remove('hidden');

    document.getElementById('history-list').classList.add('hidden');
});
