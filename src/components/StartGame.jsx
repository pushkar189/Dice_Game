import styled from "styled-components"
import { Button } from "../Styled/button";

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div className="image">
        <img src = "/images/dices.png" alt = "dice" />
        </div>
      <div className="start">
      <h1>Dice Game</h1>
      <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  height: 100vh;
  background-color: #282c34;
  color: white;
  font-size: 24px;
  font-weight: 800;

  .start{
   h1{
    white-space: nowrap;
    font-size: 96px;
    font-weight: 800;
    margin-bottom: 20px;
   }
  }
`;
