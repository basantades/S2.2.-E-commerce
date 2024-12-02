// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    if (cart.length != 0) {
        for (const product in cart) {
            if (cart[product].id == id) {
                cart[product].quantity++;
                calculateTotal()
                return ;
            }
        }
    } 
    for (const product in products) {
        if (products[product].id == id) {
            let productoAlCarrito = {...products[product], quantity: 1};
            cart.push(productoAlCarrito);
            calculateTotal()
            break;
        }
    }
}

// Exercise 2
function cleanCart() {
    cart = [];
    total = 0;
    countCart()
    open_modal()
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    total = 0;

    applyPromotionsCart()

    for (const product in cart) {
        if (cart[product].subtotalWithDiscount) {
            total += cart[product].subtotalWithDiscount
        } else {
            total += cart[product].price * cart[product].quantity
        }
    }

    countCart()

}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    for (const product in cart) {
        if (cart[product].offer && cart[product].quantity >= cart[product].offer.number) {
            let discount = ((cart[product].price * cart[product].quantity) * (cart[product].offer.percent / 100)).toFixed(2);
            let subtotalWithDiscount = (cart[product].price * cart[product].quantity) - discount;
            cart[product].subtotalWithDiscount = subtotalWithDiscount;
        } else {
                delete cart[product].subtotalWithDiscount
        }
    }

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    let totalHtml = document.getElementById("total_price");
    let cartList = document.getElementById("cart_list");
    cartList.innerHTML = "";

    for (const product in cart) {
        let productHtml = `
            <tr class="align-middle">
				<th scope="row">${cart[product].name}</th>
				<td>$${cart[product].price}</td>
				<td><div class="d-flex flex-nowrap align-items-center justify-content-between py-2 min-w-80">
                <i class="fas fa-minus-circle fs-4 me-2 text-black-50" style="cursor: pointer;" onclick="removeFromCart(${cart[product].id})"></i>
                ${cart[product].quantity} 
                <i class="fas fa-plus-circle fs-4 ms-2 text-black-50" style="cursor: pointer;" onclick="addFromCart(${cart[product].id})"></i> </div></td>
				<td><div class="d-flex justify-content-between flex-nowrap align-items-center">
                <span>${(cart[product].subtotalWithDiscount) ? `$${cart[product].subtotalWithDiscount} (<s>$${cart[product].price * cart[product].quantity}</s>)` 
                    : `$${(cart[product].price * cart[product].quantity).toFixed(2)}`}</span>
                <i class="fas fa-times-circle fs-4 d-none d-sm-block" style="cursor: pointer;" onclick="removeAllFromCart(${cart[product].id})"></i></td>
            </tr>
        `;
        cartList.innerHTML += productHtml;
    }

    totalHtml.innerHTML = `${total.toFixed(2)}`;
}

function countCart() {

    let cartCounter = document.getElementById("count_product");
    let totalHtml = 0;
    for (const product in cart) {
        totalHtml += cart[product].quantity;
    }
    cartCounter.innerHTML = totalHtml;
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

    for (const product in cart) {
        if (cart[product].id === id) {
            cart[product].quantity--;
            if (cart[product].quantity === 0) {
                cart.splice(product, 1);
            }
            calculateTotal()
            open_modal()
            return ;
        }
    }
}

function addFromCart(id) {
    buy(id);
    printCart();
}

function removeAllFromCart(id) {
    for (const product in cart) {
        if (cart[product].id === id) {
                cart.splice(product, 1);
        }
    }
    calculateTotal()
    open_modal()
    return ;
}


function open_modal() {
    printCart();
}