import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL, FILE_PATH } from "./../../api/config";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { FaStar } from "react-icons/fa";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../redux/Actions/CartAction";
import { addToFavoriesAction } from "../../redux/Actions/FavoriesAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProductsAction } from "../../redux/Actions/ProductAction";
import './blogDetail.scss'
import { getBlogAction } from "../../redux/Actions/BlogAction";


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
};

const BlogDetailBody = () => {
    const { blogs } = useSelector((state) => state.blog);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    const { cartItems } = useSelector((state) => state.cart);
    const { favoriesItems } = useSelector((state) => state.favories);
    const { products } = useSelector((state) => state.products);


    const getBlogs = async () => {
        await fetch(BASE_URL + "blog/getbyid/" + id)
            .then((res) => res.json())
            .then((data) => setProducts(data.message));
    };

    useEffect(() => {
        dispatch(getBlogAction());
        getBlogs();
    }, []);

    return (
        <div id='BlogDetailBody'>
            <div className="container">
                <div className="boxes">
                    {
                        blogs &&
                        blogs.map((blog) => (
                            <>
                                <div className='user'>
                                    <i class="fa-solid fa-user"></i>
                                    <span>Ram</span>
                                </div>
                                <Link to={"/blogdetail/" + blog.id}>
                                    <div className="image">
                                        <img width="100%" src={blog.picture} alt="" />
                                    </div>
                                </Link>

                                <div className="box">
                                    <div className="big-text">
                                        <h2>{blog.tags}</h2>
                                        <p>{blog.style}</p>
                                    </div>
                                    <div className="image-box">
                                        <div className="row">
                                            <div className="col-lg-4"><img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/blog-detail-1.jpg" alt="" /></div>
                                            <div className="col-lg-4"><img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/blog-detail-2.jpg" alt="" /></div>
                                            <div className="col-lg-4"><img width="100%" src="https://dtiva.wpengine.com/wp-content/uploads/2020/05/blog-detail-3.jpg" alt="" /></div>
                                        </div>
                                    </div>
                                    <div className="leftRightText">
                                        <div className="row">
                                            <div className="col-lg-6"><p>Pellentesque dignissim lorem ac euismod faucibus. Proin in sapien non ante consequat dapibus id ut augue. Morbi non ornare risus. Pellentesque commodo velit euismod nibh placerat, non posuere mauris mollis. Suspendisse id gravida dolor. Aenean consequat vehicula sapien, eget blandit orci euismod commodo. Integer odio libero, accumsan vel accumsan ac, porttitor id ligula. Phasellus eu finibus odio. Interdum et</p></div>
                                            <div className="col-lg-6"><p>Pellentesque dignissim lorem ac euismod faucibus. Proin in sapien non ante consequat dapibus id ut augue. Morbi non ornare risus. Pellentesque commodo velit euismod nibh placerat, non posuere mauris mollis. Suspendisse id gravida dolor. Aenean consequat vehicula sapien, eget blandit orci euismod commodo. Integer odio libero, accumsan vel accumsan ac, porttitor id ligula. Phasellus eu finibus odio. Interdum et</p></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}



export default BlogDetailBody