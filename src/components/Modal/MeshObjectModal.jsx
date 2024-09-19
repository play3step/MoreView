import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import CancelBtn from './atom/CancelBtn';
import { MeshyModalState } from '../../store/modalState';
import { getMeshList } from '../../apis/MeshyAi/MeshyAiContreoller';

import useObject from '../../hooks/AddItem/useObject';
import PreviewGltf from '../EditPage/PreviewSlide/atom/PreviewGltf';
import { userInfo } from '../../store/userState';

function MeshObjectModal() {
  const [modalValue, setModalValue] = useRecoilState(MeshyModalState);
  const userData = useRecoilValue(userInfo);
  const [listData, setListData] = useState([]);
  const { addObject } = useObject();
  console.log(userData.memberId);

  const handlePreviewClick = (object) => {
    const glbUrl = `${process.env.REACT_APP_API_URL}/${object.glb}`;
    const type = 'glb';

    addObject(object.obj, object.mtl, object.bin, glbUrl, type, object.urls);
  };
  const CancelHandler = () => {
    setModalValue(false);
  };
  useEffect(() => {
    if (modalValue) {
      const fetchData = async () => {
        const data = await getMeshList();
        setListData(data);
      };

      fetchData();
    }
  }, [modalValue]);

  if (!modalValue) {
    return null;
  }
  return (
    <ModalBackdrop>
      <ModalBox>
        <CancelPostion>
          <CancelBtn CancelHandler={CancelHandler} />
        </CancelPostion>
        <MainText>Meshy List</MainText>
        <ListBox>
          {listData?.map((data, index) => (
            <Canvas
              key={index}
              backgroundColor="#FFFFFF"
              style={{
                width: '6.25vw',
                height: '6.25vw',
                border: '1px solid',
                borderRadius: '4px',
              }}
              onClick={() => handlePreviewClick(data.model_urls)}
            >
              <hemisphereLight
                skyColor={0xffffbb}
                groundColor={0x080820}
                intensity={0.35}
              />
              <directionalLight position={[0, 0, 5]} intensity={5} />
              <directionalLight position={[5, 5, 5]} intensity={5} />
              <directionalLight position={[-5, -5, -5]} intensity={5} />
              <PreviewGltf
                key={index}
                objecturl={`${process.env.REACT_APP_API_URL}/${data.model_urls.glb}`}
                x="0"
                y="-2"
                z="-3"
              />
            </Canvas>
          ))}
        </ListBox>
      </ModalBox>
    </ModalBackdrop>
  );
}

export default MeshObjectModal;

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
  width: 33.95vw;
  height: 40.74vh;
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
const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  height: 24.72vh;
  margin-top: 3.33vh;
  overflow-y: auto;
`;
