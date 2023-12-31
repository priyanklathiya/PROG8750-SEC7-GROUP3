import React, { Component, useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../css/home.css';
import { Carousel } from 'react-responsive-carousel';
import header1 from '../images/HomeCarousel_3.jpg';
import header2 from '../images/homecarousel2.jpg';
import header3 from '../images/homecarousel3.avif';
import axios from "axios";
import '../css/carouselComponent.css';
import FeaturedCategories from './FeaturedCategories';


function Home() {

  // check user session from server using axios
  const [userSession, setUserSession] = useState(false);
  const [productsList, setProductsList] = useState([]);


  // fetch data for table
  useEffect(() => {
    fetchProductsData();
  }, [])  
  
  const fetchProductsData = () => {
    axios.get("http://localhost:8080/api/products/getAllProducts")
      .then((response) => {
        // console.log(response.data)
        if (response.data) {
          console.log(response.data);
          setProductsList(response.data.allProducts);
        }
      })
  }


  return (
    <>
      <div className="carousel-container">
      <Carousel
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={1500}
        showThumbs={false}
      >
        <div>
          <img src={header1} alt="carouselimage1" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={header2} alt="carouselimage2" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={header3} alt="carouselimage3" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
      </div>
      
      <h2 className='text-center mt-5 mb-0'>Top Deals</h2>
        <br/>
      <div className="scroll-container">
        
        {/* <div className='product_image_slider'>
          <img src="http://localhost:8080/Images/shoes_123123.png" alt="Image" />
          <p className='sellerName'>New Balance</p>
          <p className='title'> Mens 237 V1 Sneaker </p>
          <p className='price'>$ 99.99 </p>
        </div> */}
        {productsList.map((product, index) => (
          <div className='product_image_slider' key={index}>
            <img src={`http://localhost:8080/Images/products/${product.imagePath.imagePath1}`} alt={product.productName.imagePath1} />
            <p className='sellerName'>{product.sellerName}</p>
            <p className='title'>{product.productName}</p>
            <p className='price'>$ {product.price}</p>
          </div>
        ))}
      </div>


      <div className="categories-section">
        <h2 className="text-center category-title">Categories</h2>
        <FeaturedCategories />
      </div>

    </>
  )
}

export default Home