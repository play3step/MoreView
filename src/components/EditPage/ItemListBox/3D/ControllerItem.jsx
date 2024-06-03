import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ControllerModalState } from '../../../../store/modalState';

function ControllerItem() {
  const setControllerModal = useSetRecoilState(ControllerModalState);
  const handleClick = () => {
    setControllerModal(true);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ControllerBtn onClick={handleClick} />
      <ControllerText>Controller</ControllerText>
    </div>
  );
}

export default ControllerItem;

const ControllerBtn = styled.div`
  width: 2.7083333333333335vw;
  height: 4.814814814814815vh;
  border-radius: 50%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-right: 0.7vw;
`;

const ControllerText = styled.p`
  margin-top: 0.4vw;
  font-size: 1vw;
`;
