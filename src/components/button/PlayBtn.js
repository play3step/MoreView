import styled from 'styled-components';
import Play from '../../assets/play.png';

function PlayBtn() {
  return (
    <PlayButton>
      <PlayImage src={Play} alt="Play" />
    </PlayButton>
  );
}
export default PlayBtn;

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
`;

const PlayImage = styled.img`
  width: 2.6vw;
  height: 4.48vh;
`;
