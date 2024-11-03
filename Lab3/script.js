// DOM elements
const billTotalInput = document.getElementById('bill-total');
const tipPercentageInput = document.getElementById('tip-percentage');
const tipPercentDisplay = document.getElementById('tip-percent-display');
const tipPercentageDisplayInput = document.getElementById('tip-percentage-display');
const tipAmountInput = document.getElementById('tip-amount');
const totalWithTipInput = document.getElementById('total-with-tip');

// Update tip percentage display
tipPercentageInput.addEventListener('input', () => {
  const tipPercent = tipPercentageInput.value;
  tipPercentDisplay.textContent = `${tipPercent}%`;
  tipPercentageDisplayInput.value = `${tipPercent}%`;
  calculateTip();
});

// Validate input and calculate tip
billTotalInput.addEventListener('input', () => {
  if (isNaN(billTotalInput.value) || billTotalInput.value < 0) {
    alert("Please enter a valid positive number.");
    billTotalInput.value = '';
  } else {
    calculateTip();
  }
});

// Calculation function
function calculateTip() {
  const billTotal = parseFloat(billTotalInput.value);
  const tipPercentage = parseInt(tipPercentageInput.value);

  if (!isNaN(billTotal) && billTotal > 0) {
    const tipAmount = billTotal * (tipPercentage / 100);
    const totalWithTip = billTotal + tipAmount;

    tipAmountInput.value = tipAmount.toFixed(2);
    totalWithTipInput.value = totalWithTip.toFixed(2);
  } else {
    tipAmountInput.value = '';
    totalWithTipInput.value = '';
  }
}
