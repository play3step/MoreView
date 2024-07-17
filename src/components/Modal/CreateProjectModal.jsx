import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import CancelBtn from './atom/CancelBtn';
import { CreateProjectModalState } from '../../store/modalState';

function CreateProjectModal() {
  const [modalValue, setModalValue] = useRecoilState(CreateProjectModalState);
  if (!modalValue) {
    return null;
  }
  const CancelHandler = () => {
    setModalValue(false);
  };
  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default CreateProjectModal;

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
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27.083333333333332vw;
  height: 32.592592592592595vh;
  background-color: #ffffff;
  border-radius: 12px;
`;

const CancelPostion = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
`;
