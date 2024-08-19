import styled from "styled-components";


export const ALL = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin-bottom: 60px;
padding-top: 60px;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
padding-left: 20px;
`
export const WrapperText = styled.div`
margin-bottom: 10px;
font-style: ${p => p.theme.Garamond};
h2 {
    background: rgba(25, 100, 25, 0.5);
    border-radius: 6px;
    padding: 10px;

}
`

export const WrapperFoto = styled.div`
padding-right: 15px;
img {
    max-width: 200px;
    height: 300px;
    border-radius: 10px;
}
`
