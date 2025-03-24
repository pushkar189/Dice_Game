import styled, { keyframes } from "styled-components";

const RoleDice = ({ diceNumber, roleDice, isRolling }) => { // ✅ Accept isRolling prop

  return (
    <DiceContainer>
      <div className={`dice ${isRolling ? "rolling" : ""}`} onClick={roleDice}>
        <img src={`/images/dice/dice_${diceNumber}.png`} alt={`Dice ${diceNumber}`} />
      </div>
      <p>Click On Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const rollAnimation = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(360deg) scale(1.2); }
  100% { transform: rotate(720deg) scale(1); }
`;

const DiceContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rolling {
    animation: ${rollAnimation} 0.5s ease-in-out;
  }

  p {
    font-size: 24px;
    font-weight: 800;
  }
`;
