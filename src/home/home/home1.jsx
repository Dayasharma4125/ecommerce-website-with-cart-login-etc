import "./home.scss"
import axios from "axios";
import {  useContext, useEffect, useState } from "react";
import { ACTION } from "../cart/pureredux";
import { Dataf, datainfo } from "../../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const {state,dispatch}=useContext(Dataf)
    const {state1,setstate1}=useContext(datainfo)
    const [serverdata,setserverdata]=useState([])
    const navigate=useNavigate();
    useEffect(() => {
        const fectdata = async () => {
            let data1 = await axios.get("https://fakestoreapi.com/products");
            setserverdata(data1.data);
        }
        fectdata();
    }, [])
    
    return (
        <div className="mainproducts">
            {
                serverdata.map((e) => {
                    return (<>
                        <div className="contanerproduct">
                            <div className="producttitle" key={e.title}>{e.title}</div>
                            <img src={e.image} onClick={()=>{
                                setstate1(e)
                                navigate(`/webapp1/product/${e.title}`)} 
                            }/>
                            <div className="productprice" key={e.price}>${e.price}</div>
                            <button className="addtocart" onClick={() => {
                                dispatch({ type: ACTION.ADD, payload: { name: e.title, num: 1, data: e } })
                            }} >add to cart</button>
                        </div></>
                    )
                })}
        </div>)
}

export default Home;