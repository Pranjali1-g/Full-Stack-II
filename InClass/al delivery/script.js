let cart = [];
let total = 0;

function verifyAge() {
    let age = document.getElementById("age").value;
    let msg = document.getElementById("age-msg");

    if (age >= 21) {
        msg.innerHTML = "✅ Age verified. Welcome!";
        msg.style.color = "green";
        document.getElementById("store").style.display = "block";
    } else {
        msg.innerHTML = "❌ You must be 21+ to use this app.";
        msg.style.color = "red";
    }
}

function addToCart(item, price) {
    cart.push(item);
    total += price;

    let li = document.createElement("li");
    li.innerText = item + " - ₹" + price;
    document.getElementById("cart-items").appendChild(li);

    document.getElementById("total").innerText = total;
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("🎉 Order placed successfully!\nItems: " + cart.join(", "));
    cart = [];
    total = 0;
    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("total").innerText = 0;
}
