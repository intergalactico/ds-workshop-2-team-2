import styled, { css } from 'styled-components'

const isFixed = ({fixed}) => {
    if (!fixed) return;

    return css`
        position: fixed;
        top: 0px;
        left: 0px;
        width: 98vw;
    `;
}

export const Navigation = styled.div`
    background-color: ${ p => p.background ? p.background : ''};
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    ${isFixed}
`;

export const NavigationButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;
