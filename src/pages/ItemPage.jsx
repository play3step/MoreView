import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import ProjectCard from '../components/ItemPage/ProjectCard';
import { getProjectList } from '../apis/Project/ProjectController';
import CreateProjectBtn from '../components/ItemPage/CreateProjectBtn';
import { CreateProjectModalState } from '../store/modalState';
import { ProjectList } from '../store/projectState';
import { userInfo } from '../store/userState';

function ItemPage() {
  const setModalState = useSetRecoilState(CreateProjectModalState);
  const [projectData, setProjectData] = useRecoilState(ProjectList);
  const userData = useRecoilValue(userInfo);

  const createProject = () => {
    setModalState(true);
  };
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjectList(userData.memberId);
        setProjectData(projects);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, [setProjectData]);
  console.log(projectData);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '5.92vh 15.2083vw 0 4.16vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '2vh',
        }}
      >
        <CreateProjectBtn onClick={createProject} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '2vw',
          flexWrap: 'wrap',
          paddingLeft: '8vw',
        }}
      >
        {projectData.projects?.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ItemPage;
