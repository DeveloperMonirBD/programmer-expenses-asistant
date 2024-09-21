document.getElementById('calculate').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);

    document.getElementById('results').classList.remove('hidden');
});

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
