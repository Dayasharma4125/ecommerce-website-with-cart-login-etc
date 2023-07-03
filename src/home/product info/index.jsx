import React from 'react'
import { ACTION } from '../cart/pureredux'
import { Dataf, datainfo } from '../../App'
import { useContext, useEffect } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
const Productinfo = () => {
    const { state, dispatch } = useContext(Dataf)
    const { state1, setstate1 } = useContext(datainfo)
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "Shop | Product Info"
    })
    function quantitiy(z){
        let a=state.find(e=>e.name===z)
        return (a?a.num:1)
    }
    return (
        <><div className='productinfo'><h4 className='productinfotitle'>{state1.title}</h4>
            <div className='productinfodiv'>
                <img src={state1.image}></img>
                <div className='prductinfodiv2'>
                    <div className='prductinfodiv2price'>Price:- {state1.price}  </div>
                    <div className='prductinfodiv2price'>quantitiy:- {quantitiy(state1.title)} </div>
                    <div>
                        <button><span className="hover-underline-animation" onClick={() => {
                            dispatch({ type: ACTION.ADD, payload: { name: state1.title, num: 1, data: state1 } })
                            navigate("/webapp1/cart")
                        }}> ADD TO CART </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" id="arrow-horizontal" ><path id="Path_10" d="M20 0H0v20h20zm-8.344 14.709-1.41-1.418L12.547 11H4V9h8.673l-2.38-2.379 1.414-1.414 4.737 4.736z" /></svg>
                        </button>
                        <button><span className="hover-underline-animation" onClick={() => {
                            navigate("/webapp1/cart")
                        }}> Shop now </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" id="arrow-horizontal"><path id="Path_10" d="M20 0H0v20h20zm-8.344 14.709-1.41-1.418L12.547 11H4V9h8.673l-2.38-2.379 1.414-1.414 4.737 4.736z" /></svg>
                        </button>
                    </div></div>
                <p className='productinfop'>{state1.description}</p>
            </div></div>
        </>
    )
}

export default Productinfo
