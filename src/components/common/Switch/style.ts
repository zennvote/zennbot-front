import styled from 'styled-components';

interface LabelProps {
    isChecked: boolean;
    width: number;
    height: number;
}

export const Label = styled.label`
    & > div {
        // background 사이즈
        ${(props: LabelProps) => `
            width: ${props.width}px;
            height: ${props.height}px;
            border-radius: ${props.width}px;
        `}
    }

    & > input {
        // 실제 input인데 보이지 않는다.
        display: none;
    }

    ${(props: LabelProps) =>
        props.isChecked
            ? `& > div {
                // check되었을 때의, background
                background-color: rgb(0, 136, 0);
                justify-content: flex-end;

                & > span {
                    // check되었을 때의, handler
                    // handler left 연산할 때 height를 사용하는 이유는
                    // handler의 사이즈는 height - 2 이기 때문에 height를 이용한다.
                    left: calc(100% - ${props.height - 1}px);
                }
            }`
            : ''}
`;

export const Background = styled.div`
    display: inline-block;
    position: relative;
    background-color: #888;
    cursor: pointer;
    box-sizing: border-box;
`;

interface Handleprops {
    width: number;
}

export const Handle = styled.span`
    display: inline-block;
    position: absolute;
    top: 1px;
    ${(props: Handleprops) => `
        width: ${props.width - 2}px;
        height: ${props.width - 2}px;
        border-radius: ${props.width - 2}px;
    `}
    background-color: white;

    left: 1px;
    transition: left 0.2s;
`;
