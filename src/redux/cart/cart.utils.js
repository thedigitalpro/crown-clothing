export const addItemToCard = (cartItems, cartItemToAdd) => {

  // Perform a find to check if cart item already exists
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // If already exists
  if (existingCartItem) {

    // Return updated cart items with the existing cart item incremented in quantity
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {
      ...cartItem,
      quantity: cartItem.quantity + 1
    } : {cartItem})
  }

  // Nothing updated and only added so just return cart items with the new cart item
  return [...cartItems, { ...cartItemToAdd, quantity: 1}]
};
