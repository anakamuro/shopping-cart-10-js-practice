function calculatePrice(){
   let inputEl = document.getElementById("footballQuantity")
   let inputText = inputEl.value;
   let quantity = parseInt(inputText)
   if (isNaN(quantity)){
    console.log("You must type an imteger value for the quantity.")
    return;
   }
   if(quantity < 0){
    console.log("you must type a positive integer value for the quantity.")
    return;
   }
   let price = 15.00;
   taxRate = 0.07;
   let totalPrice  = quantity * price * (1 + taxRate);
   let tax = quantity * price * taxRate
   let outputEl = document.getElementById('totalPrice')
   let taxEl = document.getElementById('tax')
   outputEl.innerText = totalPrice;
   taxEl.innerText = tax;
}
