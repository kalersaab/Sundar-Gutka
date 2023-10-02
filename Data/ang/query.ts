import { useQuery } from "react-query";
import { Ang } from "../../types";
import { getAng } from "./services";

export const useAng = ({ angId }: any, option: any) =>
    useQuery<any, any, Ang, any>(["ang", angId], async () => getAng({ angId }),
        { ...option }
    );