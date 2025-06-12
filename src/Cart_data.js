import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




function Cart_data() {
  const [AddToCart1, setAddToCart1] = useState([])
  // const [delete1,setdelete1]=useState([])

  //get data function
  useEffect(() => {
    fetch("http://localhost:3006/add_cart", {
      method: "GET"
    }).then((res) => {
      return res.json()
    }).then((resp) => {
      setAddToCart1(resp)
    }).catch(() => {
      alert("not added to the cart")
    })
  },[]);

  //delete function
  const DeleteOption=(id)=>{
    fetch("http://localhost:3006/add_cart/"+id,{
      method:"DELETE"
    }).then((res)=>{
        return res.json()
      }).then((resp)=>{
        setAddToCart1(resp)
        window.location.reload()
      })
  };


  //delete all items function
  
  const DeleteAllOption=()=>{
    fetch("http://localhost:3006/add_cart/",{
      method:"DELETE"
    }).then(()=>{
      setAddToCart1([])
    });
  };

  
//  const DeleteAllOption = () => {
//   fetch("http://localhost:3006/add_cart/", {
//     method: "DELETE"
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Failed to delete. Status: " + res.status);
//       }
//       return res.json();
//     })
//     .then((resp) => {
//       setAddToCart1(resp);
//     })
//     .catch((err) => {
//       console.error("Delete error:", err);
//       alert("Delete failed: " + err.message);
//     });
// };

     
       //checkout all items
        const OrderAllOption=()=>{
            alert("checkout all items successfully")
            window.location.reload()
        };
     
  

  return (
    <div>
      <div className="container py-4">
        <div className="card">
          <div id='cart_top' className="card-body" style={{ backgroundColor: "black", paddingLeft: "15px", height: '70px', alignItems: "center" }}>
            <h1 style={{ color: "white" }}>APPBIKE</h1>
            <Link to={"/Appbike"}><button style={{ backgroundColor: "black", color: "white" }}>COMPONENTS</button></Link>
            <Link to={"/Cart_data"}><button style={{ backgroundColor: "black", color: "white" }} >Add CART</button></Link>

          </div>
        </div>

        <div className="container py-4">
          <div className="">
            <div id='cart_bottom1' className="card-body" >

              {AddToCart1.map((item) => (
                <div id='cart_flex'>
                  <div>
                     <div><img src={item.image} style={{width:"80px",height:"80px"}}/></div>
                  </div>
                  <div>
                    <p><b style={{fontSize:"20px"}}>{item.name}</b> <span> <button id='price'><span>$</span>{item.price}</button></span><br/>{item.details}<br/><p>1 in Cart</p></p>
                  </div>
                    
                    <div style={{alignContent:"center",alignItems:"center"}}>
                    <button style={{borderStyle:"none",backgroundColor:"rgb(233, 225, 233)"}}><i onClick={()=>{DeleteOption(item.id)}} class="fa-solid fa-circle-xmark" style={{fontSize:"40px",color:"skyblue"}}></i></button>
                    </div>
                  

                </div>

                
               ))
              }

               
            </div>

           
            <div id='clear_checkout'>
                  <button onClick={()=>{DeleteAllOption()}} style={{color:"balck",backgroundColor:"yellow"}}>clear cart</button>
                  <button onClick={()=>{OrderAllOption()}} style={{color:"white",backgroundColor:"green"}}>checkout</button>
            </div>
           

          </div>
        </div>
      </div>
    </div>
  )
} export default Cart_data;