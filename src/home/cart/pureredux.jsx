import { useContext } from 'react'
import { Dataf } from '../../App';
import "./cart.scss"
import { useState } from 'react';
import { datainfo } from '../../App';
import { useNavigate } from 'react-router-dom';


let ACTION = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    ADD: "ADD_TO_CART",
    REMOVE: "REMOVE_FORM_CART",
    SETSTATE: "SET_STATE"
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
    }
}

function Pureredux() {
    let { state, dispatch } = useContext(Dataf)
    const {state1,setstate1}=useContext(datainfo)
    const navigate=useNavigate()
    return (
        <>{
            state.map(k => {
                return (<>
                    <div className='cartcontaner'>
                        <h4 className="producttitle" key={k.name} >{k.name}</h4>
                        <img src={k.data.image} onClick={()=>{
                                setstate1(k.data)
                                navigate(`/webapp1/product/${k.data.title}`)} 
                            } />
                        <h4 className="productprice" key={k.data.price}>${k.num * k.data.price}</h4>
                        <div>
                            <button className="delcbtn" onClick={() => { dispatch({ type: ACTION.INCREMENT, id: k.id, payload: { num: k.num, data: k.data, name: k.name } }) }}>+</button>
                            <button className="delcbtn" onClick={() => { dispatch({ type: ACTION.DECREMENT, id: k.id, payload: { num: k.num, data: k.data, name: k.name } }) }}>-</button>
                            <span className="cartspn1" key={k.id}> {k.num} </span>
                            <button className="delcbtn1" onClick={() => { dispatch({ type: ACTION.REMOVE, id: k.id, payload: { num: k.num, "data": k.data } }) }}>remove</button>
                        </div>
                    </div>
                </>)
            })}
            <button className='cta'><span className="hover-underline-animation"> Shop now </span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg></button>
        </>)
}

export default Pureredux;
export { reducer, ACTION };