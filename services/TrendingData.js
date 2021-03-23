import axios from "axios";

const TrendingData  = async () => {

    const url = `https://api.coingecko.com/api/v3/search/trending`;
    const response = await axios.get (url)
    .then((res)=>{
        return res
    })
    return response;
}

export default TrendingData;