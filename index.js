document.addEventListener("DOMContentLoaded", function () {
    // Ensure the button exists before adding an event listener
    let calculateBtn = document.getElementById("calculateBtn");
    
    if (calculateBtn) {
        calculateBtn.addEventListener("click", function () {
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

            let formattedTotal = totalAmount.toLocaleString('en-US', { 
                style: 'currency', 
                currency: 'USD', 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            });

            document.getElementById("result").innerHTML = 
                `Total Amount After ${term} Years: <strong>${formattedTotal}</strong>`;
        });
    } else {
        console.error("Button #calculateBtn not found. Make sure the HTML structure is correct.");
    }
});
