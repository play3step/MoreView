import styled from 'styled-components';
import { ReactComponent as Play } from '../../assets/play.svg';

function PlayBtn() {
  return (
    <PlayButton>
      <Play alt="Play" />
    </PlayButton>
  );
}
export default PlayBtn;

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
`;
