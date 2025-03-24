import styled from "styled-components";


export const Button = styled.button`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
  padding: 10px 20px;
  background-color: #61dafb;
  color: black;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #657881;
  }
`;