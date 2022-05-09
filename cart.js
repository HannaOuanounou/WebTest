
var allProducts = []

var selectProduct = []



var el = document.createElement("h1");






const remove = (el) => {
    for (i = 0; i < allProducts.length; i++) {
        allProducts.splice(el.id, i)
        console.log("removed")
    }

}


//style="height: 150px;width: 120px;"


const showProductsNew = () => {
    var a = '<div class="" style="width: 18rem; ">'
    // console.log(allProducts.length)
    for (var i = 0; i < allProducts.length; i++) {
        //console.log(typeof (allProducts[1].image))
        a += '<div class="card - body">\
        <h5 class="card - title">'+ allProducts[i].title + '</h5>\
        <img src='+ allProducts[i].image + '\
    class="rounded float-start" >\
    '+ inputButton(i) + '\
        <br>\
            <p style="font-weight: bold;">Price :'+ allProducts[i].price + '</p>\
            <a href="#" onclick="remove(this)" class="btn btn-primary" id='+ i + '>\
                <i class="fa-solid fa-trash-can"></i>\
            </a>\
        </div>'
    }
    a += '</div ><br>'
    return a
}


const chargeProduct = () => {
    var div = document.createElement("div")
    //console.log(showProductsNew())
    div.innerHTML += showProductsNew()
    document.getElementById("myItems").append(div)

}

const addShop = () => {

}


const ShopCart = () => {
    var div = document.createElement("div")
    div.innerHTML += addShop()
    document.getElementById("myShoppingCart").append(div)

}

$(document).ready(function () {
    //var allProducts = []
    fetch("https://fakestoreapi.com/products").then(function (result) {
        result.text().then(result => {

            allProducts = JSON.parse(result)


            chargeProduct()

        })
    }).catch(err => console.log(err))


    //"chargeProduct()



    function incrementValue() {
        var val = parseInt(document.getElementById("incrementButton").val, 10)
        value = isNaN(val) ? 0 : val;
        val++
        document.getElementById("incrementButton").val = val;
    }

    function decrementValue() {
        var val = parseInt(document.getElementById("incrementButton").val, 0)
        value = isNaN(val) ? 0 : val;
        val--
        document.getElementById("incrementButton").val = val;
    }





})



const inputButton = (index) => {

    return ('<div class="input-group">\
<button type="button" id="decrementButton"onclick="decrementValue()" key="'+ allProducts[index].value + 'class="btn btn-danger btn-number">\
    <i class="fa-solid fa-minus"></i>\
</button>\
<input type="text" id="quantity" name="quantity" class="form-control input-number" value='+ allProducts[index].value + '\
    min="1" max="100">\
<button type="button" id="incrementButton" onclick="incrementValue()" key="'+ allProducts[index].value + 'class="quantity-right-plus btn btn-success btn-number">\
    <i class="fa-solid fa-plus"></i>\
</button>\
</div>')
}

