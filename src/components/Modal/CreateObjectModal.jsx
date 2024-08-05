import { useRecoilState } from 'recoil';
import styled from 'styled-components';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { useState } from 'react';
import { CreateModalState } from '../../store/modalState';
import CancelBtn from './atom/CancelBtn';
import SelectBtn from './atom/SelectBtn';

function CreateObjectModal() {
  const [modalValue, setModalValue] = useRecoilState(CreateModalState);
  const [selectState, setSelectState] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  // const [text, setText] = useState('');
  // const [modelUrl, setModelUrl] = useState('');
  // const [createdTaskId, setCreatedTaskId] = useState('');

  const CancelHandler = () => {
    setModalValue(false);
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  console.log(file);
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

        <MainText>
          {selectState === 1
            ? 'Prompt'
            : selectState === 2
              ? 'Image'
              : 'Select an option'}
        </MainText>

        {selectState === 1 ? (
          <PromptInput
            type="text"
            placeholder="Describe the object you want to generate. You can use your native language"
          />
        ) : selectState === 2 ? (
          <ImageBox>
            <ImageForm
              onClick={() => document.getElementById('thumbnail').click()}
            >
              <input
                type="file"
                accept="image/*"
                id="thumbnail"
                hidden
                onChange={handleFileChange}
              />
              {preview ? (
                <img
                  src={preview}
                  alt="업로드한 이미지"
                  width="90%"
                  height="90%"
                />
              ) : null}
            </ImageForm>
          </ImageBox>
        ) : (
          <SubText>Choose between text or image to continue.</SubText>
        )}
        <SelectBox>
          <SelectBtn
            text={selectState === null ? 'Text' : '생성하기'}
            onClick={selectState === null ? () => setSelectState(1) : () => {}}
          />
          <SelectBtn
            text={selectState === null ? 'Image' : '취소'}
            onClick={
              selectState === null
                ? () => setSelectState(2)
                : () => setSelectState(null)
            }
          />
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

const PromptInput = styled.textarea`
  width: 100%;
  height: 21.48vh;
  border-radius: 8px;
  padding: 0.8vw;
  resize: none;
  overflow: hidden;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 21.48vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #3182f6;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;
