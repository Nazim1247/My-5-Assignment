function getDonationValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
};

function getBalanceValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = Number(textValue);
    return textNumber;
};

function getAvailableBalanceById(id){
    const availableBalance = document.getElementById(id).innerText;
    const availableBalanceNumber = Number(availableBalance);
    return availableBalanceNumber;
};


document.getElementById('donation-btn3').addEventListener('click', function(){

    const donationMony = getDonationValueById('donation-amount3');
    const balance = getBalanceValueById('donation-balance3');
    const showAvailableBalance = getAvailableBalanceById('available-balance');
    
    if(!isNaN(donationMony) && donationMony > 0 && showAvailableBalance > donationMony){
        const updatedBalance = donationMony + balance;
        document.getElementById('donation-balance3').innerText = updatedBalance.toFixed(2);

        const updatedAvailableBalance = showAvailableBalance - donationMony;
        document.getElementById('available-balance').innerText = updatedAvailableBalance.toFixed(2);

        // historyList
    const historyList = document.createElement('div');
    historyList.className = 'border border-1 p-5 rounded-lg';
    historyList.innerHTML = `
    <p class ="text-xl font-bold">${donationMony} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
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