import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import SvgIcon from './atom/SvgIcon';
import useText from '../../hooks/AddItem/useText';
import { ReactComponent as MainLogo } from '../../assets/logo.svg';
import { CreateModalState, SearchModalState } from '../../store/modalState';

function EditHeader({ pageValue, setMenu, fullScreen, redo, undo }) {
  const { addText } = useText();
  const is3dDisabled = pageValue.type !== '3d';
  const is2dDisabled = pageValue.type !== '2d';
  const setModal = useSetRecoilState(CreateModalState);
  const setSearchModal = useSetRecoilState(SearchModalState);
  const nav = useNavigate();
  const backHandle = () => {
    nav(-1);
  };
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
        <Editor2DBox>
          <SvgIcon type="Text" onClick={is3dDisabled ? addText : undefined} />
          <SvgIcon
            type="Shape"
            onClick={() => (is3dDisabled ? setMenu(1) : null)}
          />
          <SvgIcon
            type="Image"
            onClick={() => (is3dDisabled ? setMenu(2) : null)}
          />
        </Editor2DBox>
        <Editor3DBox>
          <SvgIcon
            type="Search"
            onClick={() => (is2dDisabled ? setSearchModal(true) : null)}
          />
          <SvgIcon
            type="Creation"
            onClick={() => (is2dDisabled ? setModal(true) : null)}
          />
        </Editor3DBox>
      </CenterSection>
      <RightSection>
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

const Editor2DBox = styled.div`
  display: flex;
  gap: 1.4583333333333333vw;
`;

const Editor3DBox = styled.div`
  display: flex;
  gap: 1.0416666666666665vw;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2.2395833333333335vw;
`;
