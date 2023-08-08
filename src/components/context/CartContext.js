import { createContext, useContext, useReducer } from 'react'
import { cartReducer } from '../reducer/cartReducer'
const initialstate = {
  cartlist: [],
  total: 0
}
const Cartcontext = createContext(initialstate)
export const Cartprovider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialstate)
  const addtocart = (product) => {
    const updatecartlist = state.cartlist.concat(product)
    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatecartlist }
    })
  }
  const value = {
    total: state.total,
    cartlist: state.cartlist,
    addtocart
  }
  return (
    <Cartcontext.Provider value={value}>
      {children}
    </Cartcontext.Provider>
  )
}
export const Usecart = () => {
  const context = useContext(Cartcontext)
  return context
}