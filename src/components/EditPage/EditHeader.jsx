import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import SvgIcon from './atom/SvgIcon';
import useText from '../../hooks/AddItem/useText';
import { ReactComponent as MainLogo } from '../../assets/logo.svg';
import {
  CreateModalState,
  MeshyModalState,
  SearchModalState,
  ShareModalState,
} from '../../store/modalState';
import ShareBtn from './PreviewSlide/atom/ShareBtn';
import { meshyLoadingState } from '../../store/toolState';
import Spinner from '../Modal/atom/Spinner';

function EditHeader({
  pageValue,
  setMenu,
  fullScreen,
  redo,
  undo,
  socket,
  code,
}) {
  const { sendText } = useText(socket, code);
  const is3dDisabled = pageValue.type !== '3d';
  const is2dDisabled = pageValue.type !== '2d';
  const setModal = useSetRecoilState(CreateModalState);
  const setSearchModal = useSetRecoilState(SearchModalState);
  const setMeshyModal = useSetRecoilState(MeshyModalState);
  const setShareModal = useSetRecoilState(ShareModalState);
  const meshyState = useRecoilValue(meshyLoadingState);
  const [showCheckMark, setShowCheckMark] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const nav = useNavigate();
  const backHandle = () => {
    nav(-1);
  };
  useEffect(() => {
    // 최초 로딩이 완료된 이후에만 체크 마크를 표시
    if (hasLoaded && meshyState === false) {
      setShowCheckMark(true);

      const timer = setTimeout(() => {
        setShowCheckMark(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
    return () => {};
  }, [meshyState, hasLoaded]);
  useEffect(() => {
    if (meshyState === true) {
      setHasLoaded(true); // 로딩이 시작되면 로딩 완료 상태로 간주
    }
  }, [meshyState]);
  return (
    <HeaderContainer>
      <BackLogo onClick={backHandle}>
        <MainLogo width="11.97vw" height="4.81vh" />
      </BackLogo>
      <LeftSection>
        <SvgIcon type="Undo" onClick={undo} />
        <SvgIcon type="Redo" onClick={redo} />
      </LeftSection>
      <CenterSection>
        {pageValue.type !== '3d' ? (
          <EditorBox>
            <SvgIcon
              type="Text"
              onClick={is3dDisabled ? sendText : undefined}
            />
            <SvgIcon
              type="Shape"
              onClick={() => (is3dDisabled ? setMenu(1) : null)}
            />
            <SvgIcon
              type="Image"
              onClick={() => (is3dDisabled ? setMenu(2) : null)}
            />
          </EditorBox>
        ) : (
          <EditorBox>
            <SvgIcon
              type="Search"
              onClick={() => (is2dDisabled ? setSearchModal(true) : null)}
            />
            {meshyState ? (
              <Spinner type="small" />
            ) : showCheckMark ? (
              <CheckMark>✔</CheckMark>
            ) : (
              <SvgIcon
                type="Creation"
                onClick={() => (is2dDisabled ? setModal(true) : null)}
              />
            )}
            <SvgIcon
              type="Folder"
              onClick={() => (is2dDisabled ? setMeshyModal(true) : null)}
            />
          </EditorBox>
        )}
      </CenterSection>
      <RightSection>
        <ShareBtn setShareModal={setShareModal} />
        <SvgIcon type="Play" onClick={fullScreen} />
      </RightSection>
    </HeaderContainer>
  );
}

export default EditHeader;

const BackLogo = styled.div`
  margin-left: 1.25vw;
`;

const HeaderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 8.333333333333332vh;
  background-color: #ffffff;
  border-bottom: 1px solid #747684;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  gap: 1vw;
  margin-left: 2vw;
`;

const CenterSection = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  flex: 1;
`;

const EditorBox = styled.div`
  display: flex;
  gap: 1.4583333333333333vw;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2.2395833333333335vw;
  gap: 1.5vw;
`;
const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
`;

const CheckMark = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4vw;
  color: green;
  animation: ${fadeInOut} 2s ease-in-out;
`;
