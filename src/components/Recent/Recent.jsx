import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBlogAction } from '../../redux/Actions/BlogAction'
import './recent.scss'

const Recent = () => {

    const { blogs } = useSelector((state) => state.blog)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogAction())
    }, [])
    return (
        <div id='recent'>
            <div className="container">
                <div className="top">
                    <div className="image">
                        <img src="https://dtiva.wpengine.com/wp-content/themes/iva/images/heading-floral-decor-image.png" alt="" />
                        <div className="text">
                            <h6>Beauty Updates</h6>
                            <h1>Recent Posts</h1>
                        </div>

                    </div>
                </div>
                <div className="bottom">
                    <div className="row">
                        {
                            blogs &&
                            blogs.map((blog) => (
                                <div className="col-lg-4">
                                    <Link to={"/blogdetail" + blog.id}>
                                    <div className="image">
                                        <img width="100%" src={blog.picture} alt="" />
                                    </div>
                                    </Link>
                                    <div className="text">
                                        <h3>{blog.tags}</h3>
                                        <div className="iconBox">
                                            <span><i class="fa-solid fa-user"></i>{blog.name}</span>
                                            <span><i class="fa-solid fa-calendar"></i>{blog.date}</span>
                                            <span><i class="fa-solid fa-comment"></i>0</span>
                                        </div>
                                        <span className='spanText'>{blog.style}</span>
                                    </div>
                                    <div className="button">
                                        <button>Read More</button>

                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recent