import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const totalPrice =cart.reduce((total,course ) => total + course.price,0)
  
    return (
        <div style={{textAlign:"center"}} >
            <h5>Order Summery</h5>
            <h6>Ordered Courses: {cart.length}</h6>
    <h6>Total price: ${totalPrice.toFixed(2)}</h6>
    <button style={{textAlign:'center',margin:'11px'}} className="btn btn-success">place order</button>
        </div>
    );
};

export default Cart;