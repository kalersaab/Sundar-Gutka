import { useQuery } from "react-query"
import { GetBanis, GetsingleBani } from "../services"

export const useGetBanis = ()=>{
    return useQuery(["GetBanis"],(()=>GetBanis()))
}
export const useGetsingleBanis = (payload: any)=>{
    return useQuery(["GetsingleBanis", payload],(()=> GetsingleBani(payload)))
}