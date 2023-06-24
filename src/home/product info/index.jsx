import React from 'react'
import { datainfo } from '../../App'
import { useContext } from 'react'
import './index.scss'
const Productinfo = () => {
    const { state1, setstate1 } = useContext(datainfo)
    console.log(state1)
    return (
        <><div className='productinfo'><h4 className='productinfotitle'>{state1.title}</h4>
            <div className='productinfodiv'>
                <img src={state1.image}></img>
                <div className='prductinfodiv2'>
                    <div className='prductinfodiv2price'>Price:- {state1.price}  </div>
                    <div className='prductinfodiv2price'>quantitiy:- </div>
                    <div>
                        <button><span className="hover-underline-animation"> ADD TO CART </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" id="arrow-horizontal"><path id="Path_10" d="M20 0H0v20h20zm-8.344 14.709-1.41-1.418L12.547 11H4V9h8.673l-2.38-2.379 1.414-1.414 4.737 4.736z" /></svg>
                        </button>
                        <button><span className="hover-underline-animation"> Shop now </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" id="arrow-horizontal"><path id="Path_10" d="M20 0H0v20h20zm-8.344 14.709-1.41-1.418L12.547 11H4V9h8.673l-2.38-2.379 1.414-1.414 4.737 4.736z" /></svg>
                        </button>
                    </div></div>
                <p className='productinfop'>{state1.description}</p>
            </div></div>
        </>
    )
}

export default Productinfo
