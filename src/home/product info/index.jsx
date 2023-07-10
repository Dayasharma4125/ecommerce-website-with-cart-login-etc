import React from 'react'
import { ACTION } from '../cart/pureredux'
import { Dataf, datainfo } from '../../App'
import { useContext, useEffect } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
const Productinfo = () => {
    const { state, dispatch } = useContext(Dataf)
    const { state1, setstate1 } = useContext(datainfo)
    const navigate = useNavigate()
    useEffect(() => {
        document.title = "Shop | Product Info"
    })
    function quantitiy(z) {
        let a = state.find(e => e.name === z)
        return (a ? a.num : 1)
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
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                        </button>
                        <button><span className="hover-underline-animation" onClick={() => {
                            navigate("/webapp1/cart")
                        }}> Shop now </span>
                            <FontAwesomeIcon icon={faArrowCircleRight} />
                        </button>
                    </div></div>
                <p className='productinfop'>{state1.description}</p>
            </div></div>
        </>
    )
}

export default Productinfo
