import React from 'react';
import SongType from '../../../types/Song';
import './index.scss';

interface SongListProps {
    songList: SongType[];
}

const SongList: React.FC<SongListProps> = ({ songList }) => {
    return (
        <div className="main-song_list-wrapper">
            {songList.map((song, idx) => (
                // TODO: idx가 아닌 song의 id 값이 존재하다면, 그 값을 사용해서 key 설정해주어야 함.
                <div className="main-song_list-item" key={idx}>
                    <p className="main-song_list-item-title">{song.title}</p>
                    <p className="main-song_list-item-requestor_name">
                        {song.requestorName}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SongList;
