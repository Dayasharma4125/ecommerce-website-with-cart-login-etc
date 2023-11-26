import "./home.scss"
import { useContext } from "react";
import { ACTION } from "../cart/pureredux";
import { Dataf, data, datainfo } from "../../App";
import { Router, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";
import TypewriterComponent from 'typewriter-effect';

const isdarkmode = () => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "rgb(255,255,255)";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        return (<div></div>)
    }
}
const Home = () => {
    const { serverdatan, setserverdatan } = useContext(data);
    const { state, dispatch } = useContext(Dataf)
    const { state1, setstate1 } = useContext(datainfo)
    const navigate = useNavigate();

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
            {
                serverdatan.map((e) => {
                    return (

                        <div key={e.id} className="contanerproduct">
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
                        </div>
                    )
                })}
        </div></>)
}

export default Home;
export { isdarkmode }