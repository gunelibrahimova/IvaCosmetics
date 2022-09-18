
import { BASE_URL } from "../../api/config"
import { CHECK_OUT } from "../Constants/CheckOutConstant"

export const CheckOutAction =(userId) => async (dispach,getstate) =>{
    var products =JSON.parse(localStorage.getItem("cartItems"))

    for (let i = 0; i < products.length; i++) {
        var data = await fetch(`${BASE_URL}Order/addorder`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    productId : products[i].id,
                    productName : products[i].name,
                    totalPrice : products[i].quantity * products[i].price,
                    totalQuantity : products[i].quantity,
                    orderTrackingId : 1,
                    isDelivered: false,
                    k205UserId : userId
                }
            )
        }).then(response => response.json())
    }

    dispach({
        type:CHECK_OUT,
        payload: data
    })
}