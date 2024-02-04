import styled from 'styled-components';
import { ReactComponent as Design } from '../../assets/design.svg';

function DesignBtn({ onClick }) {
  return (
    <DesignButton onClick={onClick}>
      <Design alt="Design" />
    </DesignButton>
  );
}
export default DesignBtn;

const DesignButton = styled.button`
  background-color: transparent;
  border: none;
`;
