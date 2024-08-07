import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import CancelBtn from './atom/CancelBtn';
import { MeshyModalState } from '../../store/modalState';
import { getMeshList } from '../../apis/MeshyAi/MeshyAiContreoller';
import MeshyItem from './atom/MeshyItem';

function MeshObjectModal() {
  const [modalValue, setModalValue] = useRecoilState(MeshyModalState);
  const [listData, setListData] = useState([]);
  const CancelHandler = () => {
    setModalValue(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMeshList();
      setListData(data);
    };

    fetchData();
  }, []);
  console.log(listData);
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
            <MeshyItem key={index} data={data} />
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
