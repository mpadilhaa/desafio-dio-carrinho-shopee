// -adicionar item no carrinho
// -deletar item do carrinho
// -remover um item do carrinho
// calcular o total

async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function removeItem(userCart, index) {
  const deleteIndex = index - 1;
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

async function calculateCart(userCart) {
  const result = userCart.reduce((total, item) => total + item.subTotal(), 0);
  console.log(result.toFixed(2));
}

async function displayCart(userCart) {
  return userCart.forEach((item, index) => {
    console.log(
      `${index + 1}: ${item.name} - R$${item.price} - ${
        item.quantity
      }x | subtotal: ${item.subTotal()}`
    );
  });
}

export { addItem, deleteItem, removeItem, calculateCart, displayCart };
