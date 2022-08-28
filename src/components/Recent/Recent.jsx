import React from 'react'
import './recent.scss'

const Recent = () => {
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

export default Recent