import React from 'react';
import Switch from '../../common/Switch';

import './index.scss';

interface FlagItemProps {
    title: string;
    value: boolean;
    handleClickToggle: () => void;
}

const FlagItem: React.FC<FlagItemProps> = ({
    title,
    value,
    handleClickToggle,
}) => {
    return (
        <div className="main-content-settings-flag_item">
            <span className="main-content-settings-flag_item-title">
                {title}
            </span>
            <Switch value={value} handleClickToggle={handleClickToggle} />
        </div>
    );
};

export default FlagItem;
