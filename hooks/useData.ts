import axios from "axios";
import { useState, useEffect } from "react";
import SERVER from "../config/connection";
import { Bani } from "../types";
const useData = ()=> {
const [data, setData] = useState<Bani[]>([]);
const GetAPIdata = async () => {
    try {
        const res = await axios.get(SERVER);
        setData(res?.data || []);
    } catch (error) {
        console.log(error);
    }
};
useEffect(() => {
    GetAPIdata();
}, []);
return data;
}

export default useData