import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 320px;
  height: 500px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  border-radius: 10px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
  width: 128px;
  height: 128px;
`;

export const Text = styled.p`
  color: #333;
  text-align: center;
  margin-top: 64px;
`;

export const Input = styled.input`
  height: 48px;
  width: 100%;
  background-color: #e3e3e3;
  padding: 0 8px;
  border: 0;
  border-radius: 4px;
  margin-top: 24px;
  font-weight: bold;
  font-size: 16px;
  ::placeholder {
    color: #999;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #a91d1d;
  margin-top: 4px;
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  height: 48px;
  width: 100%;
  margin-top: 36px;
  border: 0;
  border-radius: 4px;
  background-color: ${({ $isLoading }) => ($isLoading ? "#745E86" : "#8d1ce7")};
  color: #f3f3f3;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
