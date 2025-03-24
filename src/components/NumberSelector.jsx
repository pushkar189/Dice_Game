import styled from "styled-components"
import { useState } from "react";



const NumberSelector = ({setError ,error, selectedNumber , setSelectedNumber}) => {
    
const arrNumbers = [1,2,3,4,5,6];

const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
}
   
  return (
    <NumberSelectorContainer>
        {error && <p style={{color: "black"}}>{error}</p>}
        <div className="flex"> {
            arrNumbers.map((value , i) => (
                <Box
                isSelected={value === selectedNumber} 
                key={i} onClick={() => numberSelectorHandler(value)}> 
                    <h1>{value}</h1>
                </Box>
            ))
        }
        </div>
       <div className="selectnumber">
        <h3>Select Number</h3>
       </div>

    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
margin-bottom: 50px;
  flex-direction: column;
  align-items: center;
  background-color: #dccfe4;
.flex{
    display: flex;
    margin: 24px;
    justify-content: center;
    gap: 24px;
}
.selectnumber{
    text-align: center;
    margin-top: 24px;
}
`;

const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;



  h1 {
    font-size: 24px;
    text-align: center;
  }
`;
