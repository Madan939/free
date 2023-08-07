import React from 'react'

const Card = ({item}) => {
    // console.log(item)
 const {name,price,img}=item
  return (
    <>
        < div className='col-8 col-md-3 m-auto mb-1 mt-2'>
             <div className="card">
               <img src={img} className="card-img-top " alt="" />
               <div className="card-body d-flex flex-column align-items-center">
               <p className="h5 card-text text-center">{name}</p>
                 <p className="h6">Rs.{price}</p>
                 <p className="btn btn-primary">Add to card</p>
               </div>
             </div>
             </div>
    </>
  )
}

export default Card