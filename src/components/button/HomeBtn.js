import Home from '../../assets/home.png';

function HomeBtn({ className }) {
  return (
    <button
      type="button"
      className={className}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <img
        src={Home}
        alt="home"
        style={{
          width: '2.2vw',
          height: '4.1vh',
        }}
      />
    </button>
  );
}

export default HomeBtn;
