import React from 'react'
import './news.scss'

const News = () => {
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
                        <div className="col-lg-4">
                            <div className="image">
                                <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/blog-1-750x640.jpg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Trendy hair cut for straight <br /> hair</h3>
                                <div className="iconBox">
                                    <span><i class="fa-solid fa-user"></i>Ram</span>
                                    <span><i class="fa-solid fa-calendar"></i>May 8, 2022</span>
                                    <span><i class="fa-solid fa-comment"></i>0</span>
                                </div>
                                <span className='spanText'>Enim praesent elementum facilisis leo. Sed <br /> augue lacus viverra vitae congue eu <br /> consequat ac...</span>
                            </div>
                            <div className="button">
                                <button>Read More</button>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="image">
                                <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/blog-2-750x640.jpg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Trendy hair cut for straight <br /> hair</h3>
                                <div className="iconBox">
                                    <span><i class="fa-solid fa-user"></i>Ram</span>
                                    <span><i class="fa-solid fa-calendar"></i>May 8, 2022</span>
                                    <span><i class="fa-solid fa-comment"></i>0</span>
                                </div>
                                <span className='spanText'>Enim praesent elementum facilisis leo. Sed <br /> augue lacus viverra vitae congue eu <br /> consequat ac...</span>
                            </div>
                            <div className="button">
                                <button>Read More</button>

                            </div>
                        </div> <div className="col-lg-4">
                            <div className="image">
                                <img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/blog-3-750x640.jpg" alt="" />
                            </div>
                            <div className="text">
                                <h3>Trendy hair cut for straight <br /> hair</h3>
                                <div className="iconBox">
                                    <span><i class="fa-solid fa-user"></i>Ram</span>
                                    <span><i class="fa-solid fa-calendar"></i>May 8, 2022</span>
                                    <span><i class="fa-solid fa-comment"></i>0</span>
                                </div>
                                <span className='spanText'>Enim praesent elementum facilisis leo. Sed <br /> augue lacus viverra vitae congue eu <br /> consequat ac...</span>
                            </div>
                            <div className="button">
                                <button>Read More</button>

                            </div>
                        </div>
                    </div>
                </div>
                  
                </div>

        </div>
    )
}

export default News