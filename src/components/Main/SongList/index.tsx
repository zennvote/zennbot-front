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
            <div className="main-song_list-header">
                <span>신청곡 목록</span>
                <button>다음 곡</button>
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
