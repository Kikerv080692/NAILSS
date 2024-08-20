import styled from "styled-components";

export const Wrapper = styled.div`
    padding-top: 80px;
    border: 2px solid white;
    border-radius: 10px;
    width: 390px;
    margin: auto;
    padding-bottom: 40px;
    margin-top: 50px;
h1 {
    font-family: ${(p) => p.theme.fonts.fancy};
    font-size: ${(p) => p.theme.space[5]}px;
    display: flex;
    justify-content: center;
    color: ${p => p.theme.colors.headers};
}
`