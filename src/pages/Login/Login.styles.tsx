import styled from "styled-components";
import Input from "antd/es/input";
import Text from "antd/es/typography/Text";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const HeaderText = styled(Text)`
  text-align: center;
`;

export const Image = styled.img`
  height: 200px;
  width: auto;
  margin-bottom: 1rem;

  @media screen and (max-width: 495px) {
    height: 150px;
  }

  @media screen and (max-width: 380px) {
    height: 120px;
  }
`;

export const InputWrapper = styled(Input)`
  padding: 0.7rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  width: 40vw;
  padding: 1rem;

  @media screen and (max-width: 1110px) {
    width: 70vw;
  }

  @media screen and (max-width: 660px) {
    width: 90vw;
  }
`;
