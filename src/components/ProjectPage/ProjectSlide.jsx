import styled from 'styled-components';
import SlideClose from './SlideComponents/SlideClose';

function ProjectSlide() {
  return (
    <SlideListContainer>
      <SlideClose />
    </SlideListContainer>
  );
}

export default ProjectSlide;

const SlideListContainer = styled.div`
  width: 94.375vw;
  height: 27.974vh;
  background-color: #e9e9e9;
`;
