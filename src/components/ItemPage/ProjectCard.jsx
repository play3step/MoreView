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
      {data.thumbnailUrl ? (
        <img
          src={data.thumbnailUrl}
          alt="이미지"
          style={{
            width: '17.6vw',
            height: '16.29vh',
          }}
        />
      ) : (
        <Logo width="17.6vw" height="16.29vh" />
      )}
      <CardTextBox>
        <CardTitle>{data.name}</CardTitle>
        <CardDate>{data.createdAt}</CardDate>
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
  height: 8.407vh;
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
