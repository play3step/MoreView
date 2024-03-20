import styled from 'styled-components';
import { ReactComponent as Search } from '../../../assets/myPage/search.svg';

function SearchProject() {
  return (
    <>
      <Search width="0.9375vw" height="1.6666666666666667vh" />
      <SeachInput placeholder="Search" />
    </>
  );
}

export default SearchProject;

const SeachInput = styled.input`
  width: 9.208333333333334vw;
  height: 2.9629629629629632vh;
  vertical-align: middle;
  border: none;
  margin-top: 4.166666666666666vh;
  margin-bottom: 4.444444444444445vh;
  padding-left: 0.4vw;
  margin-left: 0.6vw;
`;
