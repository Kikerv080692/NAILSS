import styled from "styled-components";


export const ALL = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
margin-bottom: 60px;
padding-top: 60px;
width: 100%;
@media (min-width: 768px) and (max-width: 1023px) {
   justify-content: center;
  }
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
padding-left: 15px;
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
padding-right: 10px;
padding-left: 10px;
img {
    max-width: 190px;
    height: 300px;
    border-radius: 10px;
}

@media (min-width: 768px) and (max-width: 1023px) {
   img{
    max-width: 600px;
    height: 600px;
   }
  }
`
