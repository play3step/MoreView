import styled from 'styled-components';
import { ReactComponent as Play } from '../../assets/icon/play.svg';

function PlayBtn() {
  return (
    <PlayButton>
      <Play alt="Play" width="2.60416vw" height="4.6296vh" />
    </PlayButton>
  );
}
export default PlayBtn;

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
`;
