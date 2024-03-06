import styled from 'styled-components';

function SlideList({ onClick, select }) {
  return <SlideListBox onClick={onClick} select={select} />;
}

export default SlideList;

const SlideListBox = styled.button`
  width: 18.958vw;
  height: 16.11vh;
  border: 2px solid ${({ select }) => (select ? 'red' : 'black')};
  border-radius: 25px;
  background-color: #d9d9d9;
  flex-shrink: 0; // 크기 조절 비활성화
`;
