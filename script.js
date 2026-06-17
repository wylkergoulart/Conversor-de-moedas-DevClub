const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToBeConverted = document.querySelector(".currency-select-to-be-converted")


function convertValue() {

   const inputCurrencyValue = document.querySelector(".input-currency-value").value

   const dolarToday = 5.2
   const euroToday = 6.2
   const libraToday = 6.8
   const bitcoinToday = 150000

   const currencyFrom = currencySelectToBeConverted.value
   const currencyTo = currencySelect.value

   // Converter valor de entrada para BRL (real) como moeda base
   let valueInBRL = inputCurrencyValue

   if (currencyFrom == "USD") {
      valueInBRL = inputCurrencyValue * dolarToday
   } else if (currencyFrom == "EUR") {
      valueInBRL = inputCurrencyValue * euroToday
   } else if (currencyFrom == "GBP") {
      valueInBRL = inputCurrencyValue * libraToday
   } else if (currencyFrom == "BTC") {
      valueInBRL = inputCurrencyValue * bitcoinToday
   }

   changeCurrency2()

   // Exibir valor de origem formatado
   if (currencyFrom == "USD") {
      document.getElementById("valor-origem").innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue)
   } else if (currencyFrom == "EUR") {
      document.getElementById("valor-origem").innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue)
   } else if (currencyFrom == "GBP") {
      document.getElementById("valor-origem").innerHTML = new Intl.NumberFormat("en-UK", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue)
   } else if (currencyFrom == "BTC") {
      document.getElementById("valor-origem").innerHTML = inputCurrencyValue.toLocaleString("en-US", {
         minimumFractionDigits: 8,
         maximumFractionDigits: 8
      }) + " BTC"
   } else {
      document.getElementById("valor-origem").innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(inputCurrencyValue)
   }

   // Converter de BRL para moeda destino
   if (currencyTo == "USD") {
      document.getElementById("valor-destino").innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(valueInBRL / dolarToday)
   } else if (currencyTo == "EUR") {
      document.getElementById("valor-destino").innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(valueInBRL / euroToday)
   } else if (currencyTo == "GBP") {
      document.getElementById("valor-destino").innerHTML = new Intl.NumberFormat("en-UK", {
         style: "currency",
         currency: "GBP"
      }).format(valueInBRL / libraToday)
   } else if (currencyTo == "BTC") {
      document.getElementById("valor-destino").innerHTML = (valueInBRL / bitcoinToday).toLocaleString("en-US", {
         minimumFractionDigits: 8,
         maximumFractionDigits: 8
      }) + " BTC"
   } else {
      document.getElementById("valor-destino").innerHTML = new Intl.NumberFormat("pt-BR", {
         style: "currency",
         currency: "BRL"
      }).format(valueInBRL)
   }

}

function changeCurrency() {
   const currencyName = document.querySelector(".currency-name")
   const currencyImage = document.querySelector(".currency-image")


   if (currencySelect.value == 'USD') {

      currencyName.innerHTML = 'Dólar Americano'
      currencyImage.src = './assets/usa.png'
   }

   if (currencySelect.value == 'EUR') {

      currencyName.innerHTML = 'Euro'
      currencyImage.src = './assets/euro.png'
   }

   if (currencySelect.value == 'GBP') {

      currencyName.innerHTML = 'Libra esterlina'
      currencyImage.src = './assets/libra.png'
   }

   if (currencySelect.value == 'BTC') {

      currencyName.innerHTML = 'Bitcoin'
      currencyImage.src = './assets/bitcoin.png'
   }

   if (currencySelect.value == 'BRL') {

      currencyName.innerHTML = 'Real brasileiro'
      currencyImage.src = './assets/brasil 2.png'
   }

   convertValue()
}


const changeCurrency2 = () => {
   const currencyNameOrigin = document.querySelector(".currency-name-origin")
   const currencyImageOrigin = document.querySelector(".currency-image-origin")
   const currencyFrom = currencySelectToBeConverted.value

   if (currencyFrom == 'USD') {
      currencyNameOrigin.innerHTML = 'Dólar Americano'
      currencyImageOrigin.src = './assets/usa.png'
   }

    else if (currencyFrom == 'EUR') {
      currencyNameOrigin.innerHTML = 'Euro'
      currencyImageOrigin.src = './assets/euro.png'
   }

   else if (currencyFrom == 'GBP') {
      currencyNameOrigin.innerHTML = 'Libra esterlina'
      currencyImageOrigin.src = './assets/libra.png'
   } 

   else if (currencyFrom == 'BTC') {
      currencyNameOrigin.innerHTML = 'Bitcoin'
      currencyImageOrigin.src = './assets/bitcoin.png'
   } 
   
   else {
      currencyNameOrigin.innerHTML = 'Real brasileiro'
      currencyImageOrigin.src = './assets/brasil 2.png'
   }
}

convertButton.addEventListener("click", convertValue)
currencySelect.addEventListener("change", changeCurrency)
currencySelectToBeConverted.addEventListener("change", convertValue)
currencySelectToBeConverted.addEventListener("change", changeCurrency2)



