export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (existingItem) {
    console.log('exisitngItem!!');
    return cartItems.map(cartItem => {
      if (cartItem.id === itemToAdd.id) {
        console.log('match!');
        return {...cartItem, quantity: cartItem.quantity + 1};
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, {...itemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem,
  );
};
