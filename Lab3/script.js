document.addEventListener('DOMContentLoaded', () => {
    const billAmount = document.getElementById('billAmount');
    const tipRange = document.getElementById('tipRange');
    const tipPercentage = document.getElementById('tipPercentage');
    const tipAmountUSD = document.getElementById('tipAmountUSD');
    const tipAmountINR = document.getElementById('tipAmountINR');
    const totalAmountUSD = document.getElementById('totalAmountUSD');
    const totalAmountINR = document.getElementById('totalAmountINR');
    const errorMessage = document.getElementById('error-message');

    const exchangeRateINR = 84.07;  // USD to INR conversion rate

    const calculateTip = () => {
        const bill = parseFloat(billAmount.value);
        const tipPercent = parseFloat(tipRange.value);

        if (isNaN(bill) || bill <= 0) {
            errorMessage.textContent = 'Please enter a valid bill amount!';
            tipAmountUSD.value = '';
            tipAmountINR.value = '';
            totalAmountUSD.value = '';
            totalAmountINR.value = '';
            return;
        } else {
            errorMessage.textContent = '';
        }

        const calculatedTipUSD = (bill * tipPercent / 100).toFixed(2);
        const calculatedTotalUSD = (bill + parseFloat(calculatedTipUSD)).toFixed(2);

        const calculatedTipINR = (calculatedTipUSD * exchangeRateINR).toFixed(2);
        const calculatedTotalINR = (calculatedTotalUSD * exchangeRateINR).toFixed(2);

        // Update fields for USD
        tipAmountUSD.value = `$${calculatedTipUSD}`;
        totalAmountUSD.value = `$${calculatedTotalUSD}`;

        // Update fields for INR
        tipAmountINR.value = `₹${calculatedTipINR}`;
        totalAmountINR.value = `₹${calculatedTotalINR}`;

        tipPercentage.textContent = `${tipPercent}%`;
    };

    billAmount.addEventListener('input', calculateTip);
    tipRange.addEventListener('input', calculateTip);
});

