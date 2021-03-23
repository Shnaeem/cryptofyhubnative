import axios from "axios";

const FetchData  = async () => {

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

    const response = await axios.get (url)
    .then((res)=>{
        return res
    })

    return response;
}

export default FetchData;