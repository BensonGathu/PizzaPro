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
    return  "<b>Number of orders:</b> "+"<i>"+this.num + "</i>"+ "<br>"+ "<b>Pizza size: </b>"+ "<i>"+this.size+"</i>"+ "<br>"+ "<b>Preferred toppings: </b>"+ "<i>"+this.toppings+ "</i>"+ "<br>"+ "<b>Preferred crust: </b>"+ "<i>"+this.crust+ "</i>";

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
            confirm("You will be charged 200 for delivery services")
            var houseNumber = document.getElementById("houseNumber").value
            var street = document.getElementById("street").value
            var addr = new Address(houseNumber,street)
            var order = new Pizza(size,crust,toppings,num)
            order.addresses.push(addr)
            alert("Your order will be delivered to your location")
    
        }else{
            var order = new Pizza(size,crust,toppings,num)
        
        }
        console.log(order)

        var total = 0
        var price = [] //variable to keep track of the prices
        
        //functions do calculate our pricess
        function sizes(order){
            if(order.size === "Mega"){
                price.push(1100)
            }else if(order.size === "Large"){
                price.push(850)
            }else if(order.size === "Medium"){
                price.push(550)
            }else{
                price.push(350)
            }
        }
        //call our function
        sizes(order)

        function crusts(order){
            if(order.crust === "Crispy" ){
                price.push(100)
            }else if(order.crust === "Stuffed"){
                price.push(75)
            }else{
                price.push(50)
            }
        }
        //call our function
        crusts(order)

        function toppingss(order){
            if(order.toppings === "Pepperoni" || order.toppings === "Mushroom"){
                price.push(100)
            }else{
                price.push(70)
            }
        }
        //call our function
        toppingss(order)

        //calculate the total of the elements in our price array. iterate through them
        for(x=0;x<=price.length-1;x++){
            var total = total += price[x]
        }
        total = total *num

        $("ul#checkout").append( order.fullDetails()+ "<b> <br>Total : <i>ksh "+ total+"</i> </b>")
    })
    $("input#check").click(function(){
        $("ul#checkout").show()
    })
    
     
    
   
    $("input#yes").click(function(){
        $("#address").show()
    })
    $("input#no").click(function(){
        $("#address").hide() 
    })

})

