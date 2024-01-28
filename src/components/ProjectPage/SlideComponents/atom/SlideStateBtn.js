import styled from 'styled-components';
import SlideUp from '../../../../assets/slideUp.png';
import SlideDown from '../../../../assets/slideDown.png';

function SlideStateBtn({ slideState, onClick }) {
  return (
    <SlideStateButton onClick={onClick}>
      {slideState ? (
        <SlideStateImg src={SlideUp} alt="SlideUp" />
      ) : (
        <SlideStateImg src={SlideDown} alt="SlideDown" />
      )}
    </SlideStateButton>
  );
}

export default SlideStateBtn;

const SlideStateButton = styled.button`
  background-color: transparent;
  border: none;
`;

const SlideStateImg = styled.img`
  width: 7.916vw;
  height: 4.199vh;
`;
