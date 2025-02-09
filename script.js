//https://youtube.com/shorts/RBidCn7CLns?si=s0MfQfvLQKa7kfGN
async function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let resultElement = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        resultElement.innerText = "Please enter a valid amount.";
        return;
    }

    try {
        let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        let data = await response.json();
        let rate = data.rates[toCurrency];
        let convertedAmount = (amount * rate).toFixed(2);

        resultElement.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        resultElement.innerText = "Error fetching exchange rates.";
    }
}
