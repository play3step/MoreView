import { useRecoilState } from 'recoil';
import styled from 'styled-components';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { CreateModalState } from '../../store/modalState';
import CancelBtn from './atom/CancelBtn';
import SelectBtn from './atom/SelectBtn';

function CreateObjectModal() {
  const [modalValue, setModalValue] = useRecoilState(CreateModalState);
  // const [text, setText] = useState('');
  // const [modelUrl, setModelUrl] = useState('');
  // const [createdTaskId, setCreatedTaskId] = useState('');

  const CancelHandler = () => {
    setModalValue(false);
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:8000/api/text-to-3d',
  //       { prompt: text },
  //     );
  //     const { result } = response.data;
  //     setCreatedTaskId(result);
  //     setText('');
  //   } catch (error) {
  //     console.error('Error creating 3D model:', error);
  //   }
  // };

  // useEffect(() => {
  //   const checkModelStatus = async (taskId) => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8000/api/text-to-3d/${taskId}`,
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching model status:', error);
  //     }
  //   };

  //   if (createdTaskId) {
  //     checkModelStatus(createdTaskId);
  //   }
  // }, [createdTaskId]);
  if (!modalValue) {
    return null;
  }
  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
        <MainText>Select an option</MainText>
        <SubText>Choose between text or image to continue.</SubText>
        <SelectBox>
          <SelectBtn text="Text" />
          <SelectBtn text="Image" />
        </SelectBox>
      </ModalBox>
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
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2.592vh;
  width: 33.958vw;
  min-height: 25.83vh;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2.395vw;
`;

const CancelPostion = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
`;

const MainText = styled.p`
  font-weight: bold;
  font-size: 1.66vw;
  color: #000000;
`;

const SubText = styled.p`
  font-size: 1.04166vw;
  color: #000000;
`;

const SelectBox = styled.div`
  display: flex;
  gap: 1.4583vw;
`;
