import styled from 'styled-components';
import SvgIcon from './atom/SvgIcon';
import useText from '../../hooks/useText';

function EditHeader() {
  const { addText } = useText();
  return (
    <HeaderContainer>
      <LeftSection>
        <SvgIcon type="Redo" />
        <SvgIcon type="Undo" />
      </LeftSection>
      <CenterSection>
        <Editor2DBox>
          <SvgIcon type="Text" onClick={addText} />
          <SvgIcon type="Shape" />
          <SvgIcon type="Image" />
        </Editor2DBox>
        <Editor3DBox>
          <SvgIcon type="Search" />
          <SvgIcon type="Creation" />
        </Editor3DBox>
      </CenterSection>
      <RightSection>
        <SvgIcon type="Play" />
      </RightSection>
    </HeaderContainer>
  );
}

export default EditHeader;

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
