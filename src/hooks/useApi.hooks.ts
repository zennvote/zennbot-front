import { useCallback } from 'react';
import axios from 'axios';

export const usePostNextSong = () => {
    return useCallback(() => {
        // TODO: https로 변경되면, https 반영해야함.
        return axios.post('http://zennbot.net/api/songs/next');
    }, []);
};
