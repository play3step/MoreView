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
            width: '16.66vw',
            height: '17.77vh',
            display: 'flex',
          }}
        />
      ) : (
        <Logo width="16.66vw" height="17.77vh" />
      )}
      <CardTextBox>
        <CardTitle>{data.name}</CardTitle>
      </CardTextBox>
    </CardContainer>
  );
}

export default ProjectCard;

const CardContainer = styled.div`
  position: relative;
  width: 17.708vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  &:hover {
    border: 1px solid #4d7df3;
  }
`;

const CardTextBox = styled.div`
  width: 100%;
  height: 5.18vh;
  padding: 0.625vw;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  line-height: 1.3vw;
`;

const CardTitle = styled.div`
  font-size: 0.7vw;
`;
