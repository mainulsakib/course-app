import React from 'react';
import fakeData from '../../fakeData'
import {useState } from 'react';
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';
import './body.css'


const Body = () => {
    const [cart,setCart]=useState([])
    const handleAddProduct=(fakeData)=>{
        console.log("I am added") 
        const newCart=[...cart,fakeData];
        setCart(newCart)
    }
    
    return (
        <div className="body">
            
            <div className="course">
           {
               fakeData.map(course=><Courses handleAddProduct={handleAddProduct} course={course}></Courses>)
           }
        </div>
        <div className="cart">
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Body;