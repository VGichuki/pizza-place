function Pizza {
  constructor(type, size, crust, toppings, quantity, delivery){
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
  this.delivery = delivery;
  this.basePrice = 600;
  }

Pizza.prototype.toppingsBasedAmount = function(){
    if(this.toppings.length != 0){
      var toppingPrice = this.toppings.length *11;
      return toppingPrice;
    }else {
      alert("please choose your Toppings !!")
    }
  }

Pizza.prototype.sizeBasedAmount = function(){
  if (this.size === "Small"){
    return 900;
  } else if(this.size === "Medium"){
    return 1000;
  } else if(this.size === "Large"){
    return 1300;
  } else {
    alert ("Please select a size that you would prefer");
  }
}

Pizza.prototype.typeBasedAmount = function(){
  if (this.type === "CHICKEN SUPREME"){
    return 200;
  } else if(this.type === "BEEF BBQ"){
    return 200;
  } else if(this.type === "VEGGIE TIKKA"){
    return 200;
  } else if(this.type === "FETA AND VEGGIE"){
    return 200;
  } else if(this.type === "PEPPERONI"){
    return 200;
  } else if(this.type === "TROPICAL VEGGIE"){
    return 200;
  } else {
    alert ("Please select the type you would prefer");
  }
}

Pizza.prototype.crustBasedAmount = function(){
  if (this.crust === "Puff pastry"){
    return 100;
  } else if(this.crust === "Tripple Cheese Crust"){
    return 150;
  } else if(this.crust === "Double Cheesy Crust"){
    return 200;
  } else if(this.crust === "Cheesy Crust"){
    return 250;
  } else if(this.crust === "Classic Pizza Crust"){
    return 300;
  } else {
    alert ("PLease select the type of crust you would prefer")
  }
}

Pizza.prototype.deliveryBasedAmount = function(){
  if (this.delivery === "Yes"){
    return 0;
  }else (this.delivery === "No"){
    return 0;
  } 
}

Pizza.prototype.quantityBasedAmount = function(){
  if (this.quantity === "1"){
    return 0;
  }else if(this.quantity === "2"){
    return 10;
  }else if(this.quantity === "3"){
    return 15;
  }else if(this.quantity === "4"){
    return 20;
  }else if(this.quantity === "5"){
    return 25;
  }else if(this.quantity === "6"){
    return 30;
  } else {
    alert ("This will cost you more")
  }
}

Pizza.prototype.calculateCost = function(toppingsBasedAmt, sizeBasedAmt, typeBasedAmt, crustBasedAmt, deliveryBasedAmt, quantityBasedAmt){
  var totalCost =toppingsBasedAmt +sizeBasedAmt +typeBasedAmt +crustBasedAmt +deliveryBasedAmt +quantityBasedAmt;
  $("#checkout").html(checkout);
}


var pizza;
$(document).ready(function(){
  $("#pizza-one-label").submit(function(event){
    event.preventDefault();
    $("#checkout").show();
    var pizzaName = $("#pizza-one-label").text();
    var pizzaSize = $("#size-selector").val();
    var toppingsType = $("#topping-selector").val();
    var crustType = $("#crust-selector").val();
    var pizzaQuantity = Number($("#pizza-quantity").val());
    // var delivery = $("#to-be-delivered").is(":checked");
    // var pickUp = $("#to-be-picked").is(":checked");
  
   pizza = new Pizza(pizzaName, pizzaSize, toppingType, crustType, pizzaQuantity);

   var toppingsBasedAmt = pizza.toppingsBasedAmount();
   var sizeBasedAmt = pizza.sizeBasedAmount();
   var typeBasedAmt = pizza.typeBasedAmount();
   var crustBasedAmt = pizza.crustBasedAmount();
   var deliveryBasedAmt = pizza.deliveryBasedAmount();
   var quantityBasedAmt = pizza.quantityBasedAmount();

   pizza.calculateCost(toppingsBasedAmt, sizeBasedAmt, typeBasedAmt, crustBasedAmt, deliveryBasedAmt, quantityBasedAmt);
  });
});
