function Pizza(size,crust,toppings,num){
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.num = num;
    this.addresses = []
}
function Address(){

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
        console.log(pizza)
    })
    $("input#yes").click(function(){
        $("#address").show()
    })
    $("input#no").click(function(){
        $("#address").hide() 
    })

})
