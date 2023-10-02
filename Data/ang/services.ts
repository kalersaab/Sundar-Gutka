import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { callApi } from "../../utils/apiUtils";

// call api to fetch ang
export const getAng = ({ angId }: any) => {
    return AsyncStorageLib.getItem("ang:" + angId).then((ang) => {
        if (ang) {
            return JSON.parse(ang);
        }

        return callApi({
            uriEndPoint: {
                uri: "/angs/:angId/D",
                method: "GET",
                version: "/v2",
            },
            pathParams: {
                angId,
            },
        }).then((res) => {
            AsyncStorageLib.setItem("ang:" + angId, JSON.stringify(res));
            return res;
        });
    });
};
