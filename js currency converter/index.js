let api= `https://v6.exchangerate-api.com/v6/7ba337dd9a0482b372ba43d7/latest/USD`;

const fromDropDown =document.querySelector("#fromCurrency");
const toDropDown = document.querySelector("#toCurrency");

// Drop Down from the Currency Array
// curriencies.forEach((currency)=>{
//     const option = document.createElement("option");
//     option.value=currency;
//     option.text=currency;
//     option.innerHTML=currency
//     fromDropDown.appendChild(option);
// });

// // Drop Down form the to converted Array
// curriencies.forEach((currency)=>{
//     const option = document.createElement("option");
//     option.value=currency;
//     option.text=currency;
//     option.innerHTML=currency;
//     toDropDown.appendChild(option);
// });

// Setting default values
fromDropDown.value="USD";
toDropDown.value="INR";

let convertCurrency =()=>{
    // create references
    const amount= document.querySelector("#amount").value;
    const result= document.querySelector("#result");
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;


    // If amount input field is not empty
    if(amount.length!=0){
        fetch(api)
        .then((response)=>response.json())
        .then((data)=>{
            let fromExchangeRate= data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount= (amount/fromExchangeRate)*toExchangeRate;
            result.innerHTML=`${convertedAmount.toFixed(2)}`;
        });
    }
    else{
        alert("Please fill in the amount");
    }
};
document.querySelector("#convert-but").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);