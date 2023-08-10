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
    updatetotal(updatecartlist)
  }
  const removefromcart=(product)=>{
    const updatecartlist= state.cartlist.filter(current=>current.id!==product.id)
    dispatch({
      type:"REMOVE_FROM_CART",
      payload: { products: updatecartlist }
    })
    updatetotal(updatecartlist)
  }
  const updatetotal=(products)=>{
     let total=0
     products.forEach(product=>total=total+product.price)
     dispatch({
      type:"UPDATE_TOTAL",
      payload:{total}
     })
  }
  const value = {
    total: state.total,
    cartlist: state.cartlist,
    addtocart,
    removefromcart,
    updatetotal
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