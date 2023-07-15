import "./home.scss"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ACTION } from "../cart/pureredux";
import { Dataf, datainfo } from "../../App";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import TypewriterComponent from 'typewriter-effect';
import { gsap } from "gsap";

const isdarkmode = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "rgb(255,255,255)";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        return(<div></div>)
    }
}
const Home = () => {
    const { state, dispatch } = useContext(Dataf)
    let [loading, setloading] = useState(true)
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
    loading === true ? document.getElementById('preloader').style.display = "block" : document.getElementById('preloader').style.display = "none";
    // gsap.fromTo(".contanerproduct",{y:100,transition:1})
    
    isdarkmode();
    return (<>
        <Helmet>
            <title> Shop | Home</title>
            <meta name="description" content="amazon 2.0 made by me full app single page application" />
            <meta property="og:type" content="amazone store 2.0" />
            <meta property="og:title" content="amazone store 2.0" />
            <meta property="og:description" content="amazon 2.0 made by me full app single page application" />
            <meta property="og:image" content="../pngwing.com.png" />
        </Helmet>
        < TypewriterComponent onInit={(typewriter) => {
            typewriter
                .typeString("welcome to our shop")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Our team Welcomes You")
                .start();
        }}></TypewriterComponent >
        <div className="mainproducts">
            {/* <div className="hotdealssection">
                <h3>Hot deals</h3>
                <img src="https://static.vecteezy.com/system/resources/previews/008/311/935/large_2x/the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg" alt="not avalable"></img>
            </div> */}
            {
                serverdata.map((e) => {
                    return (<>
                        <div className="contanerproduct">
                            <div className="producttitle" key={e.title}>{e.title}</div>
                            <img src={e.image} onClick={() => {
                                setstate1(e)
                                navigate(`/product/${e.title}`)
                                navigator.vibrate(50)
                            }
                            } />
                            <div className="productprice" key={e.price}><FontAwesomeIcon icon={faMoneyBill1} /> ${e.price}</div>
                            <button onClick={() => {
                                dispatch({ type: ACTION.ADD, payload: { name: e.title, num: 1, data: e } })
                                navigator.vibrate(50)
                            }} ><FontAwesomeIcon className="FontAwesomeIcon" icon={faCartArrowDown} /> Add to cart</button>
                        </div></>
                    )
                })}
        </div></>)
}

export default Home;
export {isdarkmode}