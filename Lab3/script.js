document.addEventListener('DOMContentLoaded', () => {
    const billAmount = document.getElementById('billAmount');
    const tipRange = document.getElementById('tipRange');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmount = document.getElementById('tipAmount');
    const totalAmount = document.getElementById('totalAmount');
    const currencySelect = document.getElementById('currency');
    const errorMessage = document.getElementById('error-message');

    const exchangeRates = {
        'USD': 1,
        'INR': 84.07 // Conversion rate for USD to INR
    };

    const currencySymbols = {
        'USD': '$',
        'INR': '₹'
    };

    const calculateTip = () => {
        const bill = parseFloat(billAmount.value);
        const tipPercent = parseFloat(tipRange.value);
        const selectedCurrency = currencySelect.value;

        if (isNaN(bill) || bill <= 0) {
            errorMessage.textContent = 'Please enter a valid bill amount!';
            tipAmount.value = '';
            totalAmount.value = '';
            return;
        } else {
            errorMessage.textContent = '';
        }

        const calculatedTipUSD = (bill * tipPercent / 100).toFixed(2);
        const calculatedTotalUSD = (bill + parseFloat(calculatedTipUSD)).toFixed(2);

        // Convert to selected currency
        const calculatedTip = (calculatedTipUSD * exchangeRates[selectedCurrency]).toFixed(2);
        const calculatedTotal = (calculatedTotalUSD * exchangeRates[selectedCurrency]).toFixed(2);

        // Update fields with the selected currency
        tipAmount.value = `${currencySymbols[selectedCurrency]}${calculatedTip}`;
        totalAmount.value = `${currencySymbols[selectedCurrency]}${calculatedTotal}`;
        tipPercentage.textContent = `${tipPercent}%`;
    };

    billAmount.addEventListener('input', calculateTip);
    tipRange.addEventListener('input', calculateTip);
    currencySelect.addEventListener('change', calculateTip);
});
