import React from 'react'
import { Addtocart } from '../components'
import { Usecart } from '../components/context/CartContext'

const Cart = () => {
    const { total,cartlist } = Usecart()
    console.log(total)
    // const products = [
    //     { id: 1, name: "Bottle", price: 500, img: "/assests/f1.jpg" },
    //     { id: 2, name: "Headphone", price: 1000, img: "/assests/f2.jpg" },
    //     { id: 3, name: "Gloves", price: 740, img: "/assests/f3.jpg" },
    //     { id: 4, name: "Finger sleeves", price: 50, img: "/assests/f4.jpg" },
    //     { id: 5, name: "Gaming set", price: 2500, img: "/assests/f5.jpg" },
    // ]

    return (
        <>
        <p className='h1'>Cart item:{cartlist.length}</p>
        <p className='h2'>total:{total}</p>
            <table className="table table-bordered  table-hover">
                <thead className=''>
                    <tr>
                        <th scope="col" className='text-center'>SN</th>
                        <th scope="col" className='text-center' >Name</th>
                        <th scope="col" className='text-center'>Price</th>
                        <th scope="col" className='text-center'>Image</th>
                        <th scope="col" className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartlist.map((item,idx) => (
                        <Addtocart key={item.id} item={item} idx={idx} />
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Cart