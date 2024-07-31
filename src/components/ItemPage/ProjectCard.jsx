import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/myPage/logo.svg';

function ProjectCard() {
  return (
    <CardContainer>
      <Logo width="17.708333333333336vw" height="17.708333333333336vw" />
      <CardTextBox>
        <CardTitle>Project A</CardTitle>
        <CardDate>2024-10-16</CardDate>
      </CardTextBox>
    </CardContainer>
  );
}

export default ProjectCard;

const CardContainer = styled.div`
  position: relative;
  width: 17.708vw;
  height: 38.88vh;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

const CardTextBox = styled.div`
  width: 100%;
  height: 7.407vh;
  padding: 0.625vw;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  line-height: 1.3vw;
`;

const CardTitle = styled.div`
  font-size: 0.8vw;
`;
const CardDate = styled.div`
  font-size: 1vw;
`;
