import React from 'react';

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
            <label>
                <input
                    type="checkbox"
                    className="main-content-settings-flag_item-checkbox"
                    checked={value}
                    onClick={handleClickToggle}
                />
                <span className="main-content-settings-flag_item-title">
                    {title}
                </span>
            </label>
        </div>
    );
};

export default FlagItem;
