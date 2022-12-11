import { getCityName as apiGetCityName } from "../services/cityname";
import {useQuery} from "@tanstack/react-query";

export default function useName(city) {
    const queryKey = ['results', city]

    const {
        data: nameData,
        error,
        isLoading
    } = useQuery(queryKey, async () => {
        const response = await apiGetCityName(city)
        return response.data;
    })

    return {
        nameData: nameData,
        error,
        isLoading
    }
}
