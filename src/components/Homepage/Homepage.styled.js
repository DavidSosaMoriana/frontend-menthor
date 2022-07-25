import styled from "styled-components";

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: hsl(30, 38%, 92%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
`

export const DSText = styled.h1`
    color: black;
    cursor: pointer;
    text-align: center;
`

export const DSImage = styled.img`
    width:40vw;
    height:60vh;
    position: absolute;
    z-index: 1000;
    cursor:pointer;
`

export const PSText = styled.p`
    position: absolute;
    bottom: 20px;
    font-size: 20px;
    color:black;
    text-align: center;
`