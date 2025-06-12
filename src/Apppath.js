import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./login";
import Appbike from "./Appbike";
import Cart_data from "./Cart_data";

function Apppath(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Appbike" element={<Appbike/>}/>
                <Route path="/Cart_data" element={<Cart_data/>}/>

            </Routes>
        </Router>
    )
}
export default Apppath;