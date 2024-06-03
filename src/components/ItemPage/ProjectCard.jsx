import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/myPage/logo.svg';
import UserIcon from '../myPage/atom/UserIcon';

function ProjectCard() {
  return (
    <CardContainer>
      <CardTitle>More View</CardTitle>
      <CardPeople>2 People</CardPeople>
      <Logo
        width="13.229166666666666vw"
        height="15.74074074074074vh"
        style={{
          marginTop: '8.796296296296296vh',
        }}
      />
      <CardExplanation>
        Fusion of traditional presentations and 3D modeling in one innovative
        program.
      </CardExplanation>
      <CardItem>
        <Link to="/Edit/1" style={{ textDecoration: 'none' }}>
          <UserIcon type="Edit" />
        </Link>
        <UserIcon type="Message" />
        <UserIcon type="Play" />
      </CardItem>
    </CardContainer>
  );
}

export default ProjectCard;

const CardContainer = styled.div`
  position: relative;
  width: 18.75vw;
  height: 58.333333333333336vh;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.037037037037037vh 1.4583333333333333vw;
`;

const CardTitle = styled.p`
  font-size: 1vw;
`;

const CardPeople = styled.p`
  font-size: 0.6vw;
  margin-top: 0.7vh;
`;

const CardExplanation = styled.p`
  width: 15.833333333333332vw;
  max-height: 8.518518518518519vh;
  margin-top: 8.148148148148149vh;
  font-size: 0.8vw;
`;

const CardItem = styled.div`
  gap: 0.6vw;
  display: flex;
  position: absolute;
  bottom: 1vw;
  left: 1vw;
`;
