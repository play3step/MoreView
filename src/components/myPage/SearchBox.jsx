import styled from 'styled-components';
import { ReactComponent as SearchBtn } from '../../assets/icon/search.svg';

function SearchBox() {
  return (
    <SearchContainer>
      <SearchIcon type="text" />
      <SearchBtnIcon />
    </SearchContainer>
  );
}
export default SearchBox;

const SearchContainer = styled.div`
  display: flex;
  position: relative;
`;

const SearchIcon = styled.input`
  width: 15.520833333333334vw;
  height: 4.814814814814815vh;
  padding: 1vw;
  border-radius: 20px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const SearchBtnIcon = styled(SearchBtn)`
  width: 2.3958vw;
  height: 4.259vh;
  position: absolute;
  right: 0.3vw;
`;
