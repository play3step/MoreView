import styled from 'styled-components';
import { ReactComponent as Search } from '../../../assets/svgIcon/Search.svg';

function SearchInput({ text, setText, onClick }) {
  return (
    <>
      <InputBox value={text} onChange={(e) => setText(e.target.value)} />
      <SearchBtn>
        <Search
          width="1.7708333333333333vw"
          height="3.148148148148148vh"
          onClick={onClick}
        />
      </SearchBtn>
    </>
  );
}

export default SearchInput;

const InputBox = styled.input`
  width: 20.3125vw;
  height: 4.2592592592592595vh;
  border-color: #bdd1f9;
  padding: 0.4vw;
`;

const SearchBtn = styled.div`
  width: 2.3958333333333335vw;
  height: 4.2592592592592595vh;
  background-color: #5098f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
