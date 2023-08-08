import React from 'react'

const Addtocart = ({ item }) => {
  const { id, img, name, price } = item
  return (
    <>
      <tr>
        <td className='text-center'>{id}</td>
        <td className='text-center'>{name}</td>
        <td className='text-center'>Rs.{price}</td>
        <td className='text-center'><img src={img} className='image' alt="" /></td>
      </tr>
    </>
  )
}

export default Addtocart