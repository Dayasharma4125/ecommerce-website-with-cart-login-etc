import "./home.scss"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ACTION } from "../cart/pureredux";
import { Dataf, datainfo } from "../../App";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faCartShopping, faMoneyBill, faMoneyBill1, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

const Home = () => {
    const { state, dispatch } = useContext(Dataf)
    const { state1, setstate1 } = useContext(datainfo)
    const [serverdata, setserverdata] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Shop | Home"
        document.meta
        const fectdata = async () => {
            let data1 = await axios.get("https://fakestoreapi.com/products");
            setserverdata(data1.data);
        }
        fectdata();
    }, [])

    return (
        <div className="mainproducts">
            {/* <div><h3>Hot deals</h3> */}
            
            {/* </div> */}
            {
                serverdata.map((e) => {
                    return (<>
                        <div className="contanerproduct">
                            <div className="producttitle" key={e.title}>{e.title}</div>
                            <img src={e.image} onClick={() => {
                                setstate1(e)
                                navigate(`/webapp1/product/${e.title}`)
                            }
                            } />
                            <div className="productprice" key={e.price}><FontAwesomeIcon icon={faMoneyBill1}/> ${e.price}</div>
                            <button onClick={() => {
                                dispatch({ type: ACTION.ADD, payload: { name: e.title, num: 1, data: e } })
                            }} ><FontAwesomeIcon className="FontAwesomeIcon" icon={faCartArrowDown}  /> Add to cart</button>
                        </div></>
                    )
                })}
        </div>)
}

export default Home;