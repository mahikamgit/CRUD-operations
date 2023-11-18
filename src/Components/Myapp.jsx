import {Link, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "./Home";
import Error from "./Error";
import Product from "../Products/Product";
import Parent from "../Props/Parent";
import Props from "../Products/Props";
import DataAPI from "../Products/DataAPI";

const Myapp = () => {

    return (
        <div>
                      
            <Header></Header>
            {/* <Login></Login> */}
            <Routes>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Error" element={<Error/>}></Route>
                <Route path="/Product" element={<Product/>}></Route>
                <Route path="/Props" element={<Props/>}></Route>
                <Route path="/Parent" element={<Parent/>}></Route>
                <Route path="/DataAPI" element={<DataAPI/>}></Route>
            </Routes>
            <Footer></Footer>
          

        </div>
    )
};
export default Myapp;