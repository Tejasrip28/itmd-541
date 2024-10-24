document.addEventListener('DOMContentLoaded', () => {
    const billAmount = document.getElementById('billAmount');
    const tipRange = document.getElementById('tipRange');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmount = document.getElementById('tipAmount');
    const totalAmount = document.getElementById('totalAmount');
    const errorMessage = document.getElementById('error-message');

    const calculateTip = () => {
        const bill = parseFloat(billAmount.value);
        const tipPercent = parseFloat(tipRange.value);

        if (isNaN(bill) || bill <= 0) {
            errorMessage.textContent = 'Please enter a valid bill amount!';
            tipAmount.value = '';
            totalAmount.value = '';
            return;
        } else {
            errorMessage.textContent = '';
        }

        const calculatedTip = (bill * tipPercent / 100).toFixed(2);
        const calculatedTotal = (bill + parseFloat(calculatedTip)).toFixed(2);

        tipAmount.value = calculatedTip;
        totalAmount.value = calculatedTotal;
        tipPercentage.textContent = `${tipPercent}%`;
    };

    billAmount.addEventListener('input', calculateTip);
    tipRange.addEventListener('input', calculateTip);
});
