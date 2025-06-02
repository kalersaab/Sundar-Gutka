import { useQuery } from "@tanstack/react-query";
import { getAng } from "./services";

export const useAng = ({ angId }: any, option: any) =>
    useQuery({
        queryKey: ["ang", angId],
        queryFn: () => getAng({ angId }),
        ...option
    });