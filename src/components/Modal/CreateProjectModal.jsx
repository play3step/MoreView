import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { CreateProjectModalState } from '../../store/modalState';
import { postFile, postProject } from '../../apis/Project/ProjectController';
import SubmitBtn from './atom/SubmitBtn';
import Cancel from './atom/Cancel';
import { userInfo } from '../../store/userState';
import { ProjectList } from '../../store/projectState';

function CreateProjectModal() {
  const [modalValue, setModalValue] = useRecoilState(CreateProjectModalState);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const userData = useRecoilValue(userInfo);
  const setProjectData = useSetRecoilState(ProjectList);

  if (!modalValue) {
    return null;
  }
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  const handleSummit = async () => {
    if (!file) {
      console.warn('No file selected');
      return;
    }
    if (!title) {
      console.warn('No title provided');
      return;
    }
    try {
      const fileUrl = await postFile(file);

      const newProject = await postProject(
        title,
        fileUrl.imageUrl,
        userData.memberId,
      );

      setProjectData((prevData) => ({
        ...prevData,
        projects: [...prevData.projects, newProject],
      }));

      setTitle('');
      setFile(null);
      setPreview(null);
      setModalValue(false);
      setTitle('');
      setFile(null);
      setPreview(null);
      setModalValue(false);
    } catch (error) {
      console.error('Error while creating project:', error);
    }
  };

  const CancelHandle = () => {
    setModalValue(false);
  };
  return (
    <ModalBackdrop>
      <ModalBox>
        <InsideBox>
          <TopBox>
            <MainTitle>프로젝트 만들기</MainTitle>
          </TopBox>
          <MiddleBox>
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
          </MiddleBox>
          <BottomBox>
            <SubTitle>프로젝트 이름</SubTitle>
            <InputTitle
              type="text"
              value={title}
              placeholder="이름을 지어주세요"
              onChange={(e) => setTitle(e.target.value)}
            />
          </BottomBox>
          <ButtonPosition>
            <SubmitBtn onClick={handleSummit} />
            <Cancel onClick={CancelHandle} />
          </ButtonPosition>
        </InsideBox>
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

  width: 24.583vw;
  height: 46.94vh;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 1.04vw;
`;

const InsideBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #c0c2f5;
  border-radius: 8px;
  padding: 1.04vw;
  display: flex;
  flex-direction: column;
  gap: 1.25vw;
`;

const TopBox = styled.div`
  width: 100%;
  height: 7.5vh;
`;

const MiddleBox = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BottomBox = styled.div`
  width: 100%;
  height: 7.2vh;
  display: flex;
  flex-direction: column;
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

const MainTitle = styled.p`
  font-size: 1.2vw;
  color: #3e418c;
`;

const SubTitle = styled.p`
  font-size: 0.833vw;
  color: #3e418c;
`;

const InputTitle = styled.input`
  width: 100%;
  height: 3.703vh;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  margin-top: 0.4vw;
  padding-left: 0.4vw;
`;

const ButtonPosition = styled.div`
  display: flex;
  gap: 0.4vw;
  justify-content: end;
`;
