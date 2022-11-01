import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogAction } from '../../redux/Actions/BlogAction';
import './news.scss'

const News = () => {

    const { blogs } = useSelector((state) => state.blog)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogAction())
    }, [])
    return (
        <div id='news'>
            <div className="top">
                <div className="image">
                    <img width="100%" src="http://dtiva.wpengine.com/wp-content/uploads/2020/05/breadcrumb-5.jpg" alt="" />
                </div>
                <div className="text">
                    <h1>News</h1>
                    <p>Home - News</p>
                </div>
            </div>

            <div className="bottom">
                <div className="container">
                    <div className="row">
                        {
                            blogs &&
                            blogs.map((blog) => (
                                <div className="col-lg-4">
                                     <Link to={'/blogdetail' + blog.id}>
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

export default News