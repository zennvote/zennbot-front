import { useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

export const usePostNextSong = () => {
    return useCallback(() => {
        // TODO: https로 변경되면, https 반영해야함.
        return axios.post('http://zennbot.net/api/songs/next');
    }, []);
};

export const useSetFreemodeHook = (): ((
    freemode: boolean
) => Promise<AxiosResponse>) => {
    return useCallback((freemode: boolean) => {
        return axios.post('http://zennbot.net/api/flags/freemode', {
            value: freemode,
        });
    }, []);
};
