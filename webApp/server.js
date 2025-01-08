const express = require("express");

console.log("hello world");
var app = express();
app.get("/api/hello", function(req, res) {
    var product  = {
        id: 1,
        name: "Product 1",
        price: 100.00
    }
    res.send(product);
    
});

app.get("/api/thankyou", function(req, res) {
    var Thanksgiving  = {
       haapyindex : 100,
        gift: "toy Car",
        price: 200.00,
        product :"smart Tv"
    }
    res.send(Thanksgiving);
    
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
