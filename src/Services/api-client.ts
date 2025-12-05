import axios from "axios";

export default axios.create({
    baseURL:`https://api.rawg.io/api`,
    params:{
        key: `0909e433086b46d29802a4ef68d24afe`
    }
})