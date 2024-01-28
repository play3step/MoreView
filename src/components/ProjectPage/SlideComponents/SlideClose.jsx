import styled from 'styled-components';
import { useState } from 'react';
import SlideStateBtn from './atom/SlideStateBtn';

function SlideClose() {
  const [slideState, setSlideState] = useState(true);
  const handleClick = () => {
    setSlideState((pre) => !pre);
  };
  return (
    <SlideCloseContainer>
      <SlideBtnPosition>
        <SlideStateBtn slideState={slideState} onClick={handleClick} />
      </SlideBtnPosition>
    </SlideCloseContainer>
  );
}

export default SlideClose;

const SlideCloseContainer = styled.div`
  width: 94.375vw;
  height: 4.19921875vh;
  background-color: #353131;
`;

const SlideBtnPosition = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
