import { callApi } from "../utils/apiUtils";
import { Gurbani } from "../utils/endpoints/endpoint";

export const GetBanis = () =>
    callApi({
      uriEndPoint: { ...Gurbani.AllBanis.v1 },
    });
export const GetsingleBani = ({query, pathParams}:any) =>
  callApi({
    uriEndPoint: { ...Gurbani.singleBani.v1 },
    query,
    pathParams
  });
export const GetHukamnama = () =>
  callApi({
    uriEndPoint: { ...Gurbani.hukamanama.v1 },
  });
    
  