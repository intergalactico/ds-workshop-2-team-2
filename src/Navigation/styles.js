import styled, { css } from 'styled-components'

const isFixed = ({fixed}) => {
    if (!fixed) return;

    return css`
        position: fixed;
        top: 1rem;
        left: 0px;
        width: 100vw;
    `;
}

export const Navigation = styled.div`
    background-color: ${ p => p.background ? p.background : ''};
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    box-sizing: border-box;
    ${isFixed},
    background: transparent
`;

export const NavigationButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;
