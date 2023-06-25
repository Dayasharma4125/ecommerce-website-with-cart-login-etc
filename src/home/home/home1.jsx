import "./home.scss"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ACTION } from "../cart/pureredux";
import { Dataf, datainfo } from "../../App";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const { state, dispatch } = useContext(Dataf)
    let [loading,setloading]=useState(true)
    const { state1, setstate1 } = useContext(datainfo)
    const [serverdata, setserverdata] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fectdata = async () => {
            let data1 = await axios.get("https://fakestoreapi.com/products");
            setserverdata(data1.data);
            setloading(false)
        }
        fectdata();
    }, [])
        loading===true?document.getElementById('preloader').style.display="block":document.getElementById('preloader').style.display="none";
    return (
        <div className="mainproducts">
            {/* <div><h3>Hot deals</h3> */}
            
            {/* </div> */}
                    <Helmet>
                        <title> Shop | Home</title>
                        <meta name="description" content="amazon 2.0 made by me full app single page application"/>
                        <meta property="og:type" content="amazone store 2.0"/>
                        <meta property="og:title" content="amazone store 2.0"/>
                        <meta property="og:description" content="amazon 2.0 made by me full app single page application"/>
                        <meta property="og:image" content="../pngwing.com.png"/>
                    </Helmet>
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