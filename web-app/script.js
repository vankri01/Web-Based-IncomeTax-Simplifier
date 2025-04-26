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
  
  function oldRegimeTax(income) {
    if (income <= 250000) return 0;
    if (income <= 500000) return (income - 250000) * 0.05;
    if (income <= 1000000) return 12500 + (income - 500000) * 0.2;
    return 112500 + (income - 1000000) * 0.3;
  }
  
  if (document.getElementById('calculate')) {
    document.getElementById('calculate').addEventListener('click', () => {
      const income = parseFloat(document.getElementById('income').value) || 0;
      const deductions = parseFloat(document.getElementById('deductions').value) || 0;
  
      const newTax = calculateTax(income, deductions);
      const oldTax = oldRegimeTax(income - deductions);
  
      document.getElementById('result').innerHTML = `
        <p>New Regime Tax: ₹${newTax.toFixed(2)}</p>
        <p>Old Regime Tax: ₹${oldTax.toFixed(2)}</p>
      `;
  
      const record = {
        date: new Date().toLocaleDateString(),
        income,
        deductions,
        newTax,
        oldTax
      };
  
      let history = JSON.parse(localStorage.getItem('taxHistory')) || [];
      history.push(record);
      localStorage.setItem('taxHistory', JSON.stringify(history));
  
      // ✨ Show the hidden Tax Saving Suggestions after calculating
      const suggestionsDiv = document.getElementById('suggestions');
      if (suggestionsDiv) {
        suggestionsDiv.classList.remove('hidden');
      }
    });
  }
  
  if (document.getElementById('history')) {
    let history = JSON.parse(localStorage.getItem('taxHistory')) || [];
    const historyList = document.getElementById('history');
    history.forEach(record => {
      historyList.innerHTML += `
        <li class="border-b py-2">
          ${record.date} - Income: ₹${record.income}, Deductions: ₹${record.deductions}, New Tax: ₹${record.newTax.toFixed(2)}, Old Tax: ₹${record.oldTax.toFixed(2)}
        </li>
      `;
    });
  }
  
  