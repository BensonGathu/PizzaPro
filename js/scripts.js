function Pizza(size,crust,toppings,num){
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.num = num;
    this.addresses = []
}
function Address(house,street){
    this.house = house;
    this.street = street;
}

Pizza.prototype.fullDetails = function(){
    
}

$(document).ready(function(){

    $("form").submit(function(event){

        event.preventDefault()
        var size = document.getElementById("size")
        var crust = document.getElementById("crust")
        var toppings = document.getElementById("toppings")
        var num = document.getElementById("num").value
        var size = size.options[size.selectedIndex].text
        var crust = crust.options[crust.selectedIndex].text
        var toppings = toppings.options[toppings.selectedIndex].text
        var pizza = new Pizza(size,crust,toppings,num)
        // console.log(pizza)
        var choice = document.querySelector("input[name=delivery]:checked").value
        if(choice === "yes"){
            var houseNumber = document.getElementById("houseNumber").value
            var street = document.getElementById("street").value
            var add = new Address(houseNumber,street)
            console.log(add)
        }
    })
    $("input#yes").click(function(){
        $("#address").show()
    })
    $("input#no").click(function(){
        $("#address").hide() 
    })

})


// $(".new-address").each(function() {
//     var inputtedStreet = $(this).find("input.new-street").val();
//     var inputtedCity = $(this).find("input.new-city").val();
//     var inputtedCounty = $(this).find("input.new-county").val();
//     var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty);
//     newContact.addresses.push(newAddress);
//   });