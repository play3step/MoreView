import ProjectCard from '../components/ItemPage/ProjectCard';

function ItemPage() {
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
