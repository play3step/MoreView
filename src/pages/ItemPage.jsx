import { useEffect } from 'react';
import ProjectCard from '../components/ItemPage/ProjectCard';
import { getProjectList } from '../apis/Project/ProjectController';

function ItemPage() {
  useEffect(() => {
    getProjectList(8);
  }, []);
  return (
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
  );
}

export default ItemPage;
