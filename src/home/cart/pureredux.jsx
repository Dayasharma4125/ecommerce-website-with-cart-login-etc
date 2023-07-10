import { useContext, useEffect } from 'react'
import { Dataf } from '../../App';
import "./cart.scss"
import { useState } from 'react';
import { datainfo } from '../../App';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import { tocken } from '../../App';
import axios from 'axios';
import { isdarkmode } from '../home/home1';


let ACTION = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    ADD: "ADD_TO_CART",
    REMOVE: "REMOVE_FORM_CART",
    SETSTATE: "SET_STATE",
    SERVER: "SET_SERVER"
}
function reducer(state, action) {
    let num;
    let name4 = action.payload.name
    let data = action.payload.data;
    let isInCart;
    if (action.type !== ACTION.SETSTATE) {
        num = action.payload.num
    }
    switch (action.type) {
        case ACTION.INCREMENT:
            isInCart = state.find(cartItem => cartItem.name == name4)
            return isInCart ?
                state.map(e => e.name === name4 ? e = { ...e, num: num + 1 } : e) : [...state]
        case ACTION.DECREMENT:
            isInCart = state.find(cartItem => cartItem.name === name4)
            if (num <= 1) {
                return state.filter(e => e.id !== action.id)
            }
            return isInCart ?
                state.map(e => e.name === name4 ? e = { ...e, num: e.num - 1 } : e) : [...state]
        case ACTION.ADD:
            isInCart = state.find(cartItem => cartItem.name == name4)
            return isInCart
                ? state.map(cartItem => cartItem.name === name4 ? cartItem = { ...cartItem, num: cartItem.num + 1 } : cartItem)
                : [...state, { "id": Math.floor(Math.random() * 10000), "name": name4, "num": num, "data": data }]
        case ACTION.REMOVE:
            return state.filter(e => e.id !== action.id)
        case ACTION.SETSTATE:
            return [state]
        case ACTION.SERVER:
            console.log(action.payload)
            return [...state, action.payload]
    }
}

function Pureredux() {
    let { state, dispatch } = useContext(Dataf)
    const { state1, setstate1 } = useContext(datainfo)
    const navigate = useNavigate()
    isdarkmode();
    const { token, settoken } = useContext(tocken)
    const [cartserver, setcartserver] = useState([])
    useEffect(() => {
        const fectdata = async () => {
            let data1 = await axios.get("/cart", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            // setcartserver(()=>data1.data);
        }
        fectdata();
    }, [token])
    // cartserver.forEach(e => {
    //     dispatch({ type: ACTION.SERVER, id: e.id1, payload: { num: e.num, data: e, name: e.title } })
    // })
    // useEffect(() => {
    //     state.map(e => {
    //         axios.post("/cart", { title: e.name, image: e.data.image, description: e.data.description, price: e.data.price, num: e.num, id1: e.id }, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }).then(res=>console.log(res.data))
    //     })
    // }, [])
    // useEffect(() => {

    // },[token])
    function shopnow() {
        if (!token) {
            navigate("/webapp1/login/")
        }
        else if (token) {
            navigate("/webapp1/purchase")
        }

    }
    return (
        <>
            <Helmet>
                <title> Shop | Cart</title>
                <meta name="description" content="amazon 2.0 made by me full app single page application" />
                <meta property="og:type" content="amazone store 2.0" />
                <meta property="og:title" content="amazone store 2.0" />
                <meta property="og:description" content="amazon 2.0 made by me full app single page application" />
                <meta property="og:image" content="../pngwing.com.png" />
            </Helmet>

            {
                state.map(k => {
                    console.log(k)
                    return (<>
                        <div className='cartcontaner'>
                            <h4 className="producttitle" key={k.name} >{k.name}</h4>
                            <img src={k.data.image} onClick={() => {
                                setstate1(k.data)
                                navigate(`/webapp1/product/${k.data.title}`)
                                navigator.vibrate(100)
                            }
                            } />
                            <h4 className="productprice" key={k.data.price}>${k.num * k.data.price}</h4>
                            <div>
                                <button className="delcbtn" onClick={() => {
                                    dispatch({ type: ACTION.INCREMENT, id: k.id, payload: { num: k.num, data: k.data, name: k.name } })
                                    navigator.vibrate(50)
                                }}>+</button>
                                <button className="delcbtn" onClick={() => {
                                    dispatch({ type: ACTION.DECREMENT, id: k.id, payload: { num: k.num, data: k.data, name: k.name } })
                                    navigator.vibrate(50)
                                }}>-</button>
                                <span className="cartspn1" key={k.id}> {k.num} </span>
                                <button className="delcbtn1" onClick={() => {
                                    dispatch({ type: ACTION.REMOVE, id: k.id, payload: { num: k.num, "data": k.data } })
                                    navigator.vibrate(50)
                                }}>remove</button>
                            </div>
                        </div>
                    </>)
                })}
            <button className='cta' onClick={() => shopnow()}><span className="hover-underline-animation"> Shop now </span>
                <FontAwesomeIcon icon={faArrowRight} /></button>
        </>)
}

export default Pureredux;
export { reducer, ACTION };