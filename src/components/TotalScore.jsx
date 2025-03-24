import styled from 'styled-components'

const TotalScore = ({ score }) => {
  return (
    <StyleContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
</StyleContainer>
  )
}

export default TotalScore;

const StyleContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 150px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 800;
  }
`;