import * as ACTIONS from './constants'

export const initState = {
  products: [],
  carts: [],
  userId: '555',
}

export const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.SET_PRODUCT:
      return {
        ...state,
        products: action.payload
      }
    case ACTIONS.SET_CART:
      return {
        ...state,
        carts: action.payload
      }
    case ACTIONS.ADD_TO_CART:
      const product = state.products.find((item) => item.id === action.payload.productId);
      return {
        ...state,
        carts: [
          ...state.carts,
          {
            ...action.payload,
            product
          }
        ],
      }

    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter((item) => item._id !== action.payload.id)
      }

    case ACTIONS.INCREMENT_QUANTITY: {
      const cartItem = state.carts.find((item) => item._id === action.payload.id);
      cartItem.quantity += 1;

      return {
        ...state,
        carts: [...state.carts]
      }
    }

    case ACTIONS.DECREMENT_QUANTITY: {
      const cartItem = state.carts.find((item) => item._id === action.payload.id);
      cartItem.quantity -= 1;
      return {
        ...state,
        carts: [...state.carts]
      }
    }
    default:
      return state;
  }
}