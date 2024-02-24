const cartButton = document.querySelector("[data-cart-button]")
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]")
let shoppingCart = []

export function setupShoppingCart() {}
// Add items to cart
// Remove items from cart
// Show/Hide the cart when clicked
// Show/Hide the cart button when it has no items or when it goes from 0 to 1 item
// Persist across multiple pages
// Calculate an accurate total
// Handle multiole of the same item in the cart

cartButton.addEventListener("click", () => {
  cartItemsWrapper.classList.toggle("invisible")
})

export function addToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 })
  renderCart()
}

function renderCart() {}
