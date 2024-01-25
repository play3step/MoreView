import styled from 'styled-components';
import DesignBtn from '../button/DesignBtn';
import ElementBtn from '../button/ElementBtn';
import TextBtn from '../button/TextBtn';

function ProjectItem() {
  return (
    <ProjectItemContainer>
      <ItemBox>
        <DesignBtn />
        <ItemTitle>디자인</ItemTitle>
      </ItemBox>
      <ItemBox>
        <ElementBtn />
        <ItemTitle>요소</ItemTitle>
      </ItemBox>
      <ItemBox>
        <TextBtn />
        <ItemTitle>텍스트</ItemTitle>
      </ItemBox>
    </ProjectItemContainer>
  );
}

export default ProjectItem;

const ProjectItemContainer = styled.div`
  width: 5.625vw;
  height: 93.652vh;
  background-color: #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemBox = styled.div`
  width: 5.625vw;
  height: 14.648vh;
  border-bottom: 1px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemTitle = styled.p`
  font-size: 1.1111vw;
  margin-top: 0.6944vw;
`;
