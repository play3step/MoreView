import styled from 'styled-components';
import { ReactComponent as Design } from '../../assets/interactive/design.svg';

function DesignBtn({ onClick }) {
  return (
    <DesignButton onClick={onClick}>
      <Design alt="Design" width="4.21875vw" height="7.5vh" />
    </DesignButton>
  );
}
export default DesignBtn;

const DesignButton = styled.button`
  background-color: transparent;
  border: none;
`;
