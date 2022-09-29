import React from 'react'
import './blogDetail.scss'

const BlogDetailBody = () => {
    return (
        <div id='BlogDetailBody'>
            <div className="container">
                <div className="boxes">
                    <div className='user'>
                    <i class="fa-solid fa-user"></i> 
                    <span>Ram</span>
                    </div>
                    <div className="image">
                        <img  src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/blog-1.jpg" alt="" />
                    </div>
                    <div className="big-text">
                        <h2>Enim praesent elementum facilisis leo. Sed augue lacus viverra vitae congue eu consequat ac felis. Fermentum odio eu feugiat pretium nibh ipsum. Accumsan in nisl nisi scelerisque eu ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada.</h2>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default BlogDetailBody