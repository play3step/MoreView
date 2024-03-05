import styled from 'styled-components';

function ProjectBox() {
  return (
    <BoxContainer>
      <TextContainer>
        <p> More, View team library</p>
      </TextContainer>
    </BoxContainer>
  );
}

export default ProjectBox;

const BoxContainer = styled.div`
  width: 15.67708vw;
  height: 18.018518vh;
  background-color: #f3f3f3;
  position: relative;
  border-radius: 15px;
`;

const TextContainer = styled.div`
  width: 15.67708vw;
  height: 3.6629629629629632vh;
  padding: 0.4vw;
  background-color: gray;
  position: absolute;
  bottom: 0;
  display: flex;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
