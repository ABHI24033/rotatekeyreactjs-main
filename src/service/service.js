import axios from "axios";
import { url } from "../component/env";

export const getAds=()=>{
    return axios.get(url + "api/adsapi");
}