import styled from 'styled-components';
import ProjectHeaer from '../components/ProjectPage/ProjectHeader';
import ProjectItem from '../components/ProjectPage/ProjectItem';

function ProjectPage() {
  return (
    <ProjectContainer>
      <ProjectHeaer />
      <ProjectItem />
    </ProjectContainer>
  );
}

export default ProjectPage;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
