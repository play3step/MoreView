import styled from 'styled-components';

function DescriptionBox() {
  return (
    <Container>
      <HeadText>Exciting Tech Additions</HeadText>
      <DescriptionText>
        Check out the latest tech features that have been added
      </DescriptionText>
    </Container>
  );
}

export default DescriptionBox;

const Container = styled.div`
  width: 27.083vw;
  height: 15.55vh;

  display: flex;
  flex-direction: column;
  gap: 2.2vh;
`;

const HeadText = styled.p`
  font-size: 2vw;
  color: black;
  font-weight: bold;
`;
const DescriptionText = styled.p`
  font-size: 0.8vw;
`;
