document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tipForm');
    const billTotal = document.getElementById('billTotal');
    const tipSlider = document.getElementById('tipSlider');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmount = document.getElementById('tipAmount');
    const totalBill = document.getElementById('totalBill');

    function calculateTip() {
        const bill = parseFloat(billTotal.value);
        const tip = parseInt(tipSlider.value);

        if (isNaN(bill) || bill < 0) {
            alert('Please enter a valid positive number for the bill total.');
            return;
        }

        tipPercentage.value = tip + '%';
        const tipValue = (bill * tip) / 100;
        const total = bill + tipValue;

        tipAmount.value = '$' + tipValue.toFixed(2);
        totalBill.value = '$' + total.toFixed(2);
    }

    form.addEventListener('input', calculateTip);
});