// Example for filling a sample form in income tax site (if allowed)
try {
    document.querySelector('input[name="income"]').value = '750000';
    document.querySelector('input[name="deductions"]').value = '150000';
  } catch (e) {
    console.log("No fillable fields detected on this page");
  }
  