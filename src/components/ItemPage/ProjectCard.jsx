import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/myPage/logo.svg';

function ProjectCard({ data }) {
  const nav = useNavigate();
  return (
    <CardContainer
      onClick={() => {
        nav(`/Edit/${data.roomId}`);
      }}
    >
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
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  &:hover {
    border: 1px solid #4d7df3;
  }
`;

const CardTextBox = styled.div`
  width: 100%;
  height: 7.407vh;
  padding: 0.625vw;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  line-height: 1.3vw;
`;

const CardTitle = styled.div`
  font-size: 0.7vw;
`;
const CardDate = styled.div`
  font-size: 0.9vw;
`;
