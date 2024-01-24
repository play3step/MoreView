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
          width: '3.0722vw',
          height: '3.0722vw',
        }}
      />
    </button>
  );
}

export default HomeBtn;
