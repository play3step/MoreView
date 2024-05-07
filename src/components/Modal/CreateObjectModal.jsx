import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { CreateModalState } from '../../store/modalState';

function CreateObjectModal() {
  const [modalValue, setModalValue] = useRecoilState(CreateModalState);
  if (!modalValue) {
    return null;
  }
  const CancelHandle = () => {
    setModalValue(false);
  };
  return (
    <ModalBackdrop>
      <ModalBox onClick={CancelHandle} />
    </ModalBackdrop>
  );
}

export default CreateObjectModal;
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  width: 27.083333333333332vw;
  height: 32.592592592592595vh;
  background-color: #ffffff;
  border-radius: 12px;
`;
