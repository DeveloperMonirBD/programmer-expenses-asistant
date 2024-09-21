document.getElementById('calculate').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const totalBalance = income - totalExpenses;

    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = totalBalance.toFixed(2);

    document.getElementById('results').classList.remove('hidden');
});

document.getElementById('calculate-savings').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const totalBalance = income - totalExpenses;

    const savings = parseFloat(document.getElementById('savings').value);
    const savingsAmount = (savings * totalBalance) / 100;
  document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);
  
  const remainingBalance = totalBalance - savingsAmount;
  document.getElementById('remaining-balance').innerText = remainingBalance;
});
