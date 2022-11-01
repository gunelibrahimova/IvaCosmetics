import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ButonPage = () => {
    // Our States
    const [value, setValue] = React.useState([2, 14]);

    // Changing State when volume increases/decreases
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
    };


    const { products } = useSelector((state) => state.products);

    

    return (
        <div>
            <div className="boxes">
                <div className="container">
                    <div className="row">
                       
                        {
                            products &&
                            products.filter((x) => x.price == value[0] - value[1]).map((product) => (
                                <div>{product.name}</div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ButonPage