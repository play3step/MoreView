import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import ProjectCard from '../components/ItemPage/ProjectCard';
import { getProjectList } from '../apis/Project/ProjectController';
import CreateProjectBtn from '../components/ItemPage/CreateProjectBtn';
import { CreateProjectModalState } from '../store/modalState';

function ItemPage() {
  const setModalState = useSetRecoilState(CreateProjectModalState);
  useEffect(() => {
    getProjectList(8);
  }, []);

  const createProject = () => {
    setModalState(true);
  };

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
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2vw',
          marginLeft: '10vw',
        }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ItemPage;
