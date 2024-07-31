import styled from 'styled-components';
import TestObject from '../components/myPage/TestObject';
import DescriptionBox from '../components/NewTechPage/DescriptionBox';

function NewTechPage() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',

        padding: '18.148vh 11.481vh 25.92vh 4.0625vw',
      }}
    >
      <NewTechContainer>
        <DescriptionBox />
        <TestObject />
      </NewTechContainer>
    </div>
  );
}

export default NewTechPage;

const NewTechContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.55vh 8.854vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.125vw;
  position: relative;
`;
