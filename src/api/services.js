import { BASE_URL } from "./config";


export const GET = async (url) =>{
    const currentUrl = BASE_URL + url

    let response = await fetch(currentUrl)

    response = response.json()

    return response;
}