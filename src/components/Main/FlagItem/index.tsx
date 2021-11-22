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
            <span className="main-content-settings-flag_item-title">
                {title}
            </span>
            <label
                className={`main-content-settings-flag_item-checkbox-label ${
                    value ? 'checked' : ''
                }`}
            >
                <div className="main-content-settings-flag_item-checkbox-label-background">
                    <span className="main-content-settings-flag_item-checkbox-label-handle"></span>
                </div>
                <input
                    type="checkbox"
                    className="main-content-settings-flag_item-checkbox"
                    checked={value}
                    onChange={handleClickToggle}
                />
            </label>
        </div>
    );
};

export default FlagItem;
