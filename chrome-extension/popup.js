function calculateTax(income, deductions) {
    let taxableIncome = income - deductions;
    if (taxableIncome <= 250000) return 0;
    if (taxableIncome <= 500000) return (taxableIncome - 250000) * 0.05;
    if (taxableIncome <= 750000) return 12500 + (taxableIncome - 500000) * 0.1;
    if (taxableIncome <= 1000000) return 37500 + (taxableIncome - 750000) * 0.15;
    if (taxableIncome <= 1250000) return 75000 + (taxableIncome - 1000000) * 0.2;
    if (taxableIncome <= 1500000) return 125000 + (taxableIncome - 1250000) * 0.25;
    return 187500 + (taxableIncome - 1500000) * 0.3;
  }
  
  document.getElementById('calculate').addEventListener('click', () => {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const tax = calculateTax(income, deductions);
    document.getElementById('result').innerText = `Tax Payable: ₹${tax.toFixed(2)}`;
  });
  