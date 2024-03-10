import styled from 'styled-components';

function SortList() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <ListBox>최신순</ListBox>
      <ListBox>이름순</ListBox>
      <ListBox>조회수</ListBox>
    </div>
  );
}

export default SortList;

const ListBox = styled.div`
  width: 9.010416666666666vw;
  height: 3.5185185185185186vh;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  padding-left: 0.6vw;
`;
