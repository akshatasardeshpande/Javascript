// console.log("Namaste");

// setTimeout(
//     function (){
//         console.log("Javascript");
//     }, 5000
// )
// // console.log("Javascript");

// console.log("Season 2");

const cart = ["shoes", "pants", "kurta"];

// api.createOrder()

// api.proceedToPayment()

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
})

//Create Order
//Payment
//Order Summary
//Update Wallet

//Code starts growing horizonatlly instead of vertically
//Callback hell or Pyramid of Doom

//Inversion of Control





