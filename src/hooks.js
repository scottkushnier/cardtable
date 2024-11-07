
import { useState } from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

function useFlip() {
    const [flipStateUp, setFlipStateUp] = useState(true);
    const flip = () => {
        setFlipStateUp(state => !state);
    }
    return([flipStateUp, flip]);
}

function useAxios(url) {
    const [axiosData, setAxiosData] = useState([]);
    const callAxios = async (suffix='') => {
        const response = await axios.get(url+suffix+'/');
        setAxiosData(data => [...data, { ...response.data, id: uuid() }]);
    };
    return([axiosData, callAxios]);
}


export { useFlip, useAxios};