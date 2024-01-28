import styled from 'styled-components';

function SlideList({ onClick }) {
  return <SlideListBox onClick={onClick} />;
}

export default SlideList;

const SlideListBox = styled.button`
  width: 18.958vw;
  height: 16.11vh;
  border: 1px solid;
  border-radius: 25px;
  background-color: #d9d9d9;
`;
