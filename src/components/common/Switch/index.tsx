import React from 'react';
import * as Styled from './style';

interface SwitchProps {
    value: boolean;
    handleClickToggle: () => void;
    // width와 height가 입력받으면 그 사이즈를 이용하고,
    // width와 height가 없으면 각각 30, 60px로 한다.
    width?: number;
    height?: number;
}

const Switch: React.FC<SwitchProps> = ({
    value,
    handleClickToggle,
    width = 60,
    height = 30,
}) => {
    return (
        <Styled.Label isChecked={value} width={width} height={height}>
            <Styled.Background>
                {/* Handler의 width는 height-2이다. */}
                <Styled.Handle width={height} />
            </Styled.Background>
            <input
                type="checkbox"
                className="common-switch-input"
                checked={value}
                onChange={handleClickToggle}
            />
        </Styled.Label>
    );
};

export default Switch;
