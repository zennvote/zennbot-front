import React from 'react';
import SongType from '../../../types/Song';
import './index.scss';

interface SongListProps {
    songList: SongType[];
}

const SongList: React.FC<SongListProps> = ({ songList }) => {
    return (
        <div>
            {songList.map((song, idx) => (
                // TODO: idx가 아닌 song의 id 값이 존재하다면, 그 값을 사용해서 key 설정해주어야 함.
                <div key={idx}>{song.title}</div>
            ))}
        </div>
    );
};

export default SongList;
