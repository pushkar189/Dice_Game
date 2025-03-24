import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button } from "../Styled/button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [diceNumber, setDiceNumber] = useState(1);
  const [isRolling, setIsRolling] = useState(false); // ✅ State for animation
  const[error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {

    if(!selectedNumber){
      setError("Please select a number");
      return;
    }
    setError("");

    setIsRolling(true); // Start animation
    setTimeout(() => {
      const randomNumber = generateRandomNumber(1, 7);
      setDiceNumber((prev) => randomNumber);
      setIsRolling(false); // Stop animation after dice change

      if(selectedNumber === randomNumber){
        setScore((prev) => prev + randomNumber);
      }
      else{
        setScore((prev) => prev - 2);
      }
    }, 500); // Animation duration



   

    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice  
        diceNumber={diceNumber}
        roleDice={roleDice}
        isRolling={isRolling} // ✅ Pass isRolling as a prop
      />

      <div className="btns">
        <Button onClick={() => {setShowRules((prev) => !prev)}}>{showRules ? "Hide" : "Show"} Rules</Button>
        <Button onClick={() => setScore(0)}>Reset</Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  .btns {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
  }
`;
