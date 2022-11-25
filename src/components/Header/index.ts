import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    background-color: #0060b1;

    padding: 0.4em;
    justify-content: space-around;
    align-items: center;
    gap: 0.2em;
`;

export const KabumLogo = styled.img`
    width: 3em;
`;

export const SearchInput = styled.input`
    border: none;

    padding: 0.8em;
    border-radius: 4px;
    margin-left: 0.6em;
`;

export const SearchButton = styled.button`
    border: none;
    background: none;
    color: grey;
    background-color: white;
    font-size: 1em;

    height: 2em;
    border-radius: 4px;
    transform: translate(-28px);
`;

export const TransparentButton = styled.button`
    border: none;
    background: none;
    color: rgb(210, 210, 210, 0.5);
    font-size: 1.5em;
    
`;
