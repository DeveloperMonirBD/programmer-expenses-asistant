let count = 0;
document.getElementById('calculate').addEventListener('click', function () {
    count += 1;
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const expenses = software + courses + internet;
    const balance = income - expenses;

    document.getElementById('total-expenses').innerText = expenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);

    document.getElementById('results').classList.remove('hidden');

    //expense history:
    const historyItem = document.createElement('div');
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

    historyItem.innerHTML = `
  <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
  <p class="text-xs text-gray-500">Serial:${count} </p>
  <p class="text-xs text-gray-500">Income: ${income.toFixed(2)}</p>
  <p class="text-xs text-gray-500">Expenses: ${expenses.toFixed(2)}</p>
  <p class="text-xs text-gray-500">Balance: ${balance.toFixed(2)}</p>
  `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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
    document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);

    const remainingBalance = balance - savingsAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
});

// history tabfunctionality :
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
