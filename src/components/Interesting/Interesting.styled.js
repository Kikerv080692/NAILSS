import styled from "styled-components";

export const Section = styled.section`
 padding-top: 10px;
 padding-left: 20px;
`

export const Header = styled.div`
margin-bottom: 20px;
color: ${p => p.theme.colors.headers};
font-family: ${p => p.theme.fonts.Garamond};
font-size: ${p => p.theme.fontSizes.ml}px;

h3 {
    font-size: ${p => p.theme.fontSizes.ml}px;
    margin-bottom: 10px;
    color: white;
    font-family: ${p => p.theme.fonts.Garamond};
    padding-bottom: 20px;
}
p{
    font-family: ${p => p.theme.fonts.Garamond};
    color: white;
    font-size: ${p => p.theme.fontSizes.ml}px;
    line-height: 1.5;
}
`

export const WrapperFirst = styled.div`
margin-bottom: 30px;
h3 {
padding-bottom: 20px;
}
p {
    line-height: 1.5;
}
`
export const TextWrapper = styled.div`
   background-color: grey;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-right: 20px;
    padding: 10px 10px;
    background: rgb(229, 18, 155);
    line-height: 1.5;
`