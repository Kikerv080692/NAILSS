import styled from "styled-components";

export const WrapperAllCalendar = styled.div`
  border: 2px solid #fff;
  border-radius: 4px;
    width: 370px;
    margin: auto;
    padding-left: 10px;
    padding-bottom: 10px;

    @media (min-width: 1023px ){
      width: 500px;
    }
    
`
export const ButtonBox = styled.div`
  padding-top: 100px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  Button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 8px;
    border: none;
    background-color: ${(p) => p.theme.colors.headers};
    color: white;
    box-shadow: 0 0 15px rgb(187, 24, 130);
    &:hover {
      background: ${(p) => p.theme.colors.backForHoverButton};
    }
  }
  @media (min-width: 767px) and (max-width: 1023px) {
  }
  @media (min-width: 1023px) {
    padding-top: 100px;
  }
`;