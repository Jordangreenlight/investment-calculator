function calculateInvestment() {
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let deposit = parseFloat(document.getElementById("deposit").value);
    let monthlyDeposit = parseFloat(document.getElementById("monthlyDeposit").value);
    let term = parseInt(document.getElementById("term").value);

    if (isNaN(interestRate) || isNaN(deposit) || isNaN(term) || isNaN(monthlyDeposit)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    let totalAmount = deposit;
    let months = term * 12;
    let monthlyInterestRate = interestRate / 12; // Convert annual rate to monthly rate

    for (let i = 0; i < months; i++) {
        totalAmount += monthlyDeposit; // Add monthly deposit
        totalAmount += totalAmount * monthlyInterestRate; // Apply monthly interest
    }

    // Format the total amount with commas and 2 decimal places
    let formattedTotal = totalAmount.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD', 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    });

    document.getElementById("result").innerHTML = 
        `Total Amount After ${term} Years: <strong>${formattedTotal}</strong>`;
}
