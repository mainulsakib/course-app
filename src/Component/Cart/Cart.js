import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    let total=0;
    
    for (let i = 0; i < cart.length; i++) {
        const  course = cart[i];
        total=total+course.price;
         
        
        
    }
    return (
    
        <div>
            <h4>Total Enrolled Courses:{cart.length}</h4>
             <h4>Total Cost: ${total}</h4>
          

        </div>
    );
};

export default Cart;