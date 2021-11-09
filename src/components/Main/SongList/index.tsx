import React, { useState, useEffect } from 'react';
import socketInstance from '../../../utils/socketInstance';
import Song from '../../../types/Song';
import SongItem from '../SongItem';
import { usePostNextSong } from '../../../hooks/useApi.hooks';
import './index.scss';

const SongList: React.FC = () => {
    const [songList, setSongList] = useState<Song[]>([]);
    const handlePostNextSong = usePostNextSong();

    useEffect(() => {
        const socket = socketInstance;

        socket.emit('songs.update');
        socket.on('songs.updated', (payload: Song[]) => {
            setSongList(payload);
        });
    }, []);

    return (
        <div className="main-song_list-wrapper">
            <div className="main-song_list-header">
                <span>신청곡 목록</span>
                <button onClick={handlePostNextSong}>다음 곡</button>
            </div>
            <div className="main-song_list-content-wrapper">
                {songList.map((song, idx) => (
                    // TODO: idx가 아닌 song의 id 값이 존재하다면, 그 값을 사용해서 key 설정해주어야 함.
                    <SongItem key={idx} songItem={song} />
                ))}
            </div>
        </div>
    );
};

export default SongList;
