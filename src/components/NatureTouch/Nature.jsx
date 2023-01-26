import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNatureAction } from '../../redux/Actions/NatureAction';
import './nature.scss'

const Nature = () => {

    const { natures} = useSelector((state) => state.natures)
    console.log(natures);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNatureAction())
    }, [])
  return (
    <div id='nature'>
        <div className="container">
            {
                natures &&
                natures.map((nature) => (
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-12 col-md-6">
                        <div className="image">
                            <img src={nature.photoURL} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 col-md-6">
                        <div className="text">
                            <p className='title'>{nature.title}</p>
                            <h1>{nature.subTitle}</h1>
                            <button>Browse Products</button>
                        </div>
                    </div>
                </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default Nature