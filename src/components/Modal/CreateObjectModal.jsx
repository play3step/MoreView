import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CreateModalState } from '../../store/modalState';
import CancelBtn from './atom/CancelBtn';
import SearchInput from './atom/SearchInput';

function CreateObjectModal() {
  const [modalValue, setModalValue] = useRecoilState(CreateModalState);
  const [text, setText] = useState('');
  const [modelUrl, setModelUrl] = useState('');
  const [createdTaskId, setCreatedTaskId] = useState('');
  console.log(setModelUrl);

  const CancelHandler = () => {
    setModalValue(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/text-to-3d',
        { prompt: text },
      );
      const { result } = response.data;
      setCreatedTaskId(result);
      setText('');
    } catch (error) {
      console.error('Error creating 3D model:', error);
    }
  };

  useEffect(() => {
    const checkModelStatus = async (taskId) => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/text-to-3d/${taskId}`,
        );
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching model status:', error);
      }
    };

    if (createdTaskId) {
      checkModelStatus(createdTaskId);
    }
  }, [createdTaskId]);
  if (!modalValue) {
    return null;
  }
  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
        <SearchInput text={text} setText={setText} onClick={handleSubmit} />
        {modelUrl && (
          <div>
            <h3>Generated 3D Model</h3>
            <a href={modelUrl} target="_blank" rel="noopener noreferrer">
              View Model
            </a>
          </div>
        )}
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
