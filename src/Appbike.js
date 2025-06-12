import React,{ useEffect, useState } from 'react';
import './Appbike.css';
import { Link } from 'react-router-dom';




function Appbike() {
  const [bikes, setBikes] = useState([]);

    useEffect(()=>{
      fetch("http://localhost:3006/posts",{
        method:"GET"

      }).then((res)=>{
        return res.json()

      }).then((resp)=>{
        setBikes(resp)
      })
    })
     
    //increment of card number
     const [count,setcount]=useState(0);
       
       // addToCart functionalities
        const addToCart = (id) => {
         setcount(count+1)
        fetch("http://localhost:3006/posts/" + id, {
            method: "GET"
        }).then((res) => {
            return res.json()

        }).then((resp) => {
            fetch("http://localhost:3006/add_cart", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(resp)
            })
      })
    }
    




  return (
<div>
  <div className="container py-4">
     <div className="card">
      <div id='cart_top' className="card-body" style={{backgroundColor:"black",paddingLeft:"15px",height:'70px',alignItems:"center"}}>
        <h1 style={{color:"white"}}>APPBIKE</h1>
        <Link to={"/Appbike"}><button style={{backgroundColor:"black",color:"white"}}>COMPONENTS</button></Link>
        <Link to={"/Cart_data"}><button style={{backgroundColor:"black",color:"white"}} >Add CART({count})</button></Link>

      </div>
    </div>
   <div/>
  
       

    <div className="container py-4">
     <div className="card">
      
      <div className="card-body">
        {bikes.map((item)=>(
          <div id='each_item'>
            <div id='for_flex'>
                <div><img src={item.image} style={{width:"100px",height:"100px"}}/></div>
              <div id='each_item1'>
                <h3>{item.name}</h3>
                <button id='price'><span>$</span>{item.price}</button>
                <h4>{item.details}</h4>
                <h5 style={{fontFamily:"-moz-initial"}}>Quantity: {item.quantity}</h5>
                <button id='addToCart' onClick={()=>{addToCart(item.id)}} >Add to Cart</button>
                
              </div>
            </div>
          </div>

        ))}


        

      </div>
           
     </div>


    </div>
     
   </div>
</div>

  );

}

export default Appbike;