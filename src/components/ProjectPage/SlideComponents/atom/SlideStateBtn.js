import styled from 'styled-components';
import { ReactComponent as SlideUp } from '../../../../assets/slideUp.svg';
import { ReactComponent as SlideDown } from '../../../../assets/slideDown.svg';

function SlideStateBtn({ slideState, onClick }) {
  return (
    <SlideStateButton onClick={onClick}>
      {slideState ? (
        <SlideDown
          alt="SlideDown"
          width="5.9375vw"
          height="3.981481481481482vh"
        />
      ) : (
        <SlideUp alt="SlideUp" width="5.9375vw" height="3.981481481481482vh" />
      )}
    </SlideStateButton>
  );
}

export default SlideStateBtn;

const SlideStateButton = styled.button`
  background-color: transparent;
  border: none;
`;
