import React from 'react'
import first from "../components/images/first.jpg"
import second from "../components/images/second.jpg"
import fourth from "../components/images/fourth.jpg"
// import p2 from "../components/images/p2.jpg"
// import p3 from "../components/images/p3.jpg"
// import p4 from "../components/images/p4.jpg"
import { Card } from '../components'
const Home = () => {
  // const data=[
  //   {id:1,name:"joggers",img:p2},
  //   {id:2,name:"Hoodie",img:p3},
  //   {id:3,name:"T-shirt",img:p4},
  // ]
  const products = [
    { id: 1, name: "Trousers", price: 1300, img: "/assests/p2.jpg" },
    { id: 2, name: "T-shirt", price: 1000, img: "/assests/p3.jpg" },
    { id: 3, name: "Hoodie", price: 1200, img: "/assests/p4.jpg" },
  ]
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide bg-secondary" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={first} className="d-block w-100 h-100  m-auto" alt="" />
          </div>
          <div className="carousel-item">
            <img src={second} className="d-block w-100 h-100 m-auto" alt="" />
          </div>
          <div className="carousel-item">
            <img src={fourth} className="d-block w-100 h-100  m-auto" alt="" />
          </div>
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='card mt-4 mb-2 bg-body-secondary'>
        <p className='h3 text-center text-light bg-danger'>Feature Product</p>
        <div className='row  w-100'>
          {products.map((item) => (
            <Card key={item.id} item={item} />
          ))}
          {/* <div className='col-8 col-md-3 m-auto mb-2 mt-2'>
             <div class="card ">
               <img src={item.img} class="card-img-top " alt="" />
               <div class="card-body d-flex flex-column align-items-center">
               <p class="h5 card-text text-center">{item.id}.{item.name}</p>
                 <p class="btn btn-primary">Add to cart</p>
               </div>
             </div> */}
        </div>
        {/* <div className='col-8 col-md-3 m-auto mb-2 mt-2'>
            <div class="card ">
              <img src={p2} class="card-img-top " alt="" />
              <div class="card-body">
                <p class="h5 card-text text-center">Joggers</p>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-3 m-auto mb-2 mt-2'>
            <div class="card">
              <img src={p4} class="card-img-top" alt="" />
              <div class="card-body">
                <p class="h5 card-text text-center">Hoodie</p>
              </div>
            </div>
          </div>
          <div className='col-8 col-md-3 m-auto mb-2 mt-2'>
            <div class="card">
              <img src={p3} class="card-img-top" alt="" />
              <div class="card-body">
                <p class="h5 card-text text-center">T-shirt</p>
              </div>
            </div>
          </div> */}
      </div>
    </>
  )
}

export default Home