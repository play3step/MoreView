import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import CancelBtn from './atom/CancelBtn';
import { ControllerModalState } from '../../store/modalState';
import { object3dState, pageState } from '../../store/recoil';
import useEditorState from '../../hooks/EditPage/useEditorState';
import ObjectValueList from './atom/ObjectValueList';

function ControllerObjectModal() {
  const [modalValue, setModalValue] = useRecoilState(ControllerModalState);
  const { pageRendering } = useEditorState();
  const [objectState, setObjectState] = useRecoilState(object3dState);
  const pageData = useRecoilValue(pageState);

  if (!modalValue) {
    return null;
  }

  const CancelHandler = () => {
    setModalValue(false);
  };

  const handlePositionChange = (id, axis, value) => {
    setObjectState((prevObjectValues) => ({
      ...prevObjectValues,
      [pageData]: prevObjectValues[pageData].map((obj) =>
        obj.id === id ? { ...obj, [axis]: value } : obj,
      ),
    }));
  };
  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
        <FunctionList>
          <p>이름</p>
          <p>크기</p>
          <p>X</p>
          <p>Y</p>
          <p>Z</p>
        </FunctionList>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {objectState[pageRendering].map((value) => (
            <ObjectValueList
              key={value.id}
              objectValue={value}
              handlePositionChange={handlePositionChange}
            />
          ))}
        </div>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default ControllerObjectModal;

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
  z-index: 99;
`;

const ModalBox = styled.div`
  position: relative;
  display: flex;
  padding: 8vw;
  width: 48.125vw;
  height: 57.96296296296296vh;
  background-color: #ffffff;
  border-radius: 12px;
`;

const CancelPostion = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
`;

const FunctionList = styled.div`
  position: absolute;
  top: 5vw;
  display: flex;
  gap: 7vw;
`;
