
import { useQuery } from "@tanstack/react-query"
import { GetBanis, GetsingleBani } from "../services"

export const useGetBanis = ()=>{
    return useQuery({
        queryKey: ["GetBanis"],
        queryFn: () => GetBanis()
    })
}
export const useGetsingleBanis = (payload: any)=>{
    return useQuery({
        queryKey: ["GetsingleBanis", payload],
        queryFn: () => GetsingleBani(payload)
    })
}
