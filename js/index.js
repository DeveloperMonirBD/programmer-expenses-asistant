// live validation for input
// document.getElementById('income').addEventListener('input', function () {
//     const inputValue = parseFloat(document.getElementById('income').value);
//     if (inputValue <= 0 || isNaN(inputValue)) {
//         document.getElementById('income-error').classList.remove('hidden');
//         return;
//     }
// });

// get value function
function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
}

// validation by functional way
function showError(id) {
    return document.getElementById(id).classList.remove('hidden');
}

// convert functional way:- toFixed(2)
function formatCurrency(amount) {
    return `${amount.toFixed(2)}`;
}

// expense history functionality :
function addToHistory(income, expenses, balance) {
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyItem.innerHTML = `
  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  <p class="text-xs text-gray-500">Serial:${count} </p>
  <p class="text-xs text-gray-500">Income: ${formatCurrency(income)}</p>
  <p class="text-xs text-gray-500">Expenses: ${formatCurrency(expenses)}</p>
  <p class="text-xs text-gray-500">Balance: ${formatCurrency(balance)}</p>
  `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

let count = 0;
document.getElementById('calculate').addEventListener('click', function () {
    count += 1;
    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);

    // get value from function:
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');

    // Validation:
    if (income <= 0 || isNaN(income)) {
        // document.getElementById('income-error').classList.remove('hidden');
        showError('income-error');
        return;
    }

    if (software <= 0 || isNaN(software)) {
        // document.getElementById('software-error').classList.remove('hidden');
        showError('software-error');
        return;
    }

    if (courses <= 0 || isNaN(courses)) {
        // document.getElementById('courses-error').classList.remove('hidden');
        showError('courses-error');
        return;
    }

    if (internet <= 0 || isNaN(internet)) {
        // document.getElementById('internet-error').classList.remove('hidden');
        showError('internet-error');
        return;
    }

    const expenses = software + courses + internet;
    const balance = income - expenses;

    if (expenses > income) {
        // document.getElementById('logic-error').classList.remove('hidden');
        showError('logic-error');
        return;
    }

    // document.getElementById('total-expenses').innerText = expenses.toFixed(2);
    // document.getElementById('balance').innerText = balance.toFixed(2);
    document.getElementById('total-expenses').innerText = formatCurrency(expenses);
    document.getElementById('balance').innerText = formatCurrency(balance);

    document.getElementById('results').classList.remove('hidden');

    //expense history:
    //     const historyItem = document.createElement('div');
    //     historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    //     historyItem.innerHTML = `
    //   <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    //   <p class="text-xs text-gray-500">Serial:${count} </p>
    //   <p class="text-xs text-gray-500">Income: ${formatCurrency(income)}</p>
    //   <p class="text-xs text-gray-500">Expenses: ${formatCurrency(expenses)}</p>
    //   <p class="text-xs text-gray-500">Balance: ${formatCurrency(balance)}</p>
    //   `;

    //     const historyContainer = document.getElementById('history-list');
    //     historyContainer.insertBefore(historyItem, historyContainer.firstChild);

    addToHistory(income, expenses, balance);

});

// add event listener for saving button:
document.getElementById('calculate-savings').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savings = parseFloat(document.getElementById('savings').value);
    const savingsAmount = (savings * balance) / 100;
    // document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);
    document.getElementById('savings-amount').innerText = formatCurrency(savingsAmount);

    const remainingBalance = balance - savingsAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
});

// history tab functionality :
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    historyTab.classList.remove('text-gray-600');
    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

assistantTab.addEventListener('click', function () {
    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});
