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
          width: '3.072vw',
          height: '4.48vh',
        }}
      />
    </button>
  );
}

export default HomeBtn;
