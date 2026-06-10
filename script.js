const convertButton = document.querySelector(".convert-button")


function convertValue() {

   const inputCurrencyValue = document.querySelector(".input-currency-value").value

    const  dolarToday = 5.2

    const valueConverted = Math.floor(inputCurrencyValue / dolarToday)

   console.log(valueConverted)

}

convertButton.addEventListener("click", convertValue)