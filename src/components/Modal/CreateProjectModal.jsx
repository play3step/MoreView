import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import CancelBtn from './atom/CancelBtn';
import { CreateProjectModalState } from '../../store/modalState';
import { postFile, postProject } from '../../apis/Project/ProjectController';

function CreateProjectModal() {
  const [modalValue, setModalValue] = useRecoilState(CreateProjectModalState);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  if (!modalValue) {
    return null;
  }

  const CancelHandler = () => {
    setModalValue(false);
  };

  const handleSummit = async () => {
    if (file) {
      try {
        const fileUrl = await postFile(file);
        await postProject(title, fileUrl);
        setTitle('');
        setFile(null);
        setModalValue(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.warn('No file selected');
    }
  };

  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
        <MainTitle>프로젝트 만들기</MainTitle>
        <input
          placeholder="이름을 지어주세요"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="thumbnail"
          type="file"
          onChange={(e) => setFile(e.target.files[0])} // 파일 선택 처리
        />
        <button type="button" onClick={handleSummit}>
          생성
        </button>
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
  flex-direction: column;
  width: 22.5vw;
  height: 56.388888888888886vh;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.04vw;
`;

const CancelPostion = styled.div`
  position: absolute;
  top: 1vw;
  right: 1vw;
`;

const MainTitle = styled.p`
  font-size: 1.2vw;
`;
