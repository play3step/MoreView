import Play from '../../assets/play.png';

function PlayBtn() {
  return (
    <button
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <img
        src={Play}
        alt="Play"
        style={{
          width: '2.6vw',
          height: '4.88vh',
        }}
      />
    </button>
  );
}

export default PlayBtn;
