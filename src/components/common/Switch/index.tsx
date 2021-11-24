import React from 'react';
import './index.scss';

interface SwitchProps {
    value: boolean;
    handleClickToggle: () => void;

    // TODO: styled component 넣으면서, width, height 반영할 수 있도록 하자.
    width?: number;
    height?: number;
}

const Switch: React.FC<SwitchProps> = ({ value, handleClickToggle }) => {
    return (
        <label className={`common-switch-label ${value ? 'checked' : ''}`}>
            <div className="common-switch-label-background">
                <span className="common-switch-label-handle"></span>
            </div>
            <input
                type="checkbox"
                className="common-switch-input"
                checked={value}
                onChange={handleClickToggle}
            />
        </label>
    );
};

export default Switch;
