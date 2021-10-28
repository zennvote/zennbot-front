import React from 'react';
import SongType from '../../../types/Song';
import SongItem from '../SongItem';
import './index.scss';

interface SongListProps {
    songList: SongType[];
}

const SongList: React.FC<SongListProps> = ({ songList }) => {
    return (
        <div className="main-song_list-wrapper">
            {songList.map((song, idx) => (
                // TODO: idx가 아닌 song의 id 값이 존재하다면, 그 값을 사용해서 key 설정해주어야 함.
                <SongItem key={idx} songItem={song} />
            ))}
        </div>
    );
};

export default SongList;
