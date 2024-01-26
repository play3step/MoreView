import styled from 'styled-components';
import Design from '../../assets/design.png';

function DesignBtn({ onClick }) {
  return (
    <DesignButton onClick={onClick}>
      <DesignImage src={Design} alt="Design" />
    </DesignButton>
  );
}
export default DesignBtn;

const DesignButton = styled.button`
  background-color: transparent;
  border: none;
`;

const DesignImage = styled.img`
  width: 5.625vw;
  height: 8vh;
`;
