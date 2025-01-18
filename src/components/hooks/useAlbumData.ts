import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { AlbumData } from "../interface/AlbumData";

const API_URL = import.meta.env.VITE_API_URL;

const fetchData = async (): AxiosPromise<AlbumData[]> => {
    const response = axios.get(API_URL + '/albuns');
    return response;
}

export function useAlbumData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['album-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}