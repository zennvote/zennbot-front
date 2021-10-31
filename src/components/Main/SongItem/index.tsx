import React from 'react';
import SongType from '../../../types/Song';
import './index.scss';

interface SongItemProps {
    songItem: SongType;
}

const SongItem: React.FC<SongItemProps> = ({ songItem }) => {
    return (
        <div className="main-song_list-item">
            <p className="main-song_list-item-title">{songItem.title}</p>
            <p className="main-song_list-item-requestor_name">
                {songItem.requestorName}
            </p>
        </div>
    );
};

export default SongItem;
