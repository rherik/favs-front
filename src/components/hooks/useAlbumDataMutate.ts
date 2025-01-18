import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { AlbumData } from "../interface/AlbumData";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data: AlbumData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/albuns', data);
    return response;
}

export function useAlbumDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['album-data'])
        }
    })

    return mutate;
}