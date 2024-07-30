import styled from 'styled-components';
import { ReactComponent as MainLogo } from '../../assets/logo.svg';

function HeaderMenu() {
  return (
    <Container>
      <MainLogo width="11.97vw" height="4.81vh" />
    </Container>
  );
}

export default HeaderMenu;

const Container = styled.div`
  width: 100vw;
  height: 7.77vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  padding: 1.48vh 3.33vw 1.48vh 1.25vw;
`;
