import Redo from '../../assets/redo.png';

function RedoBtn() {
  return (
    <button
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        marginRight: '0.2vw',
      }}
    >
      <img
        src={Redo}
        alt="Redo"
        style={{
          width: '2.4306vw',
          height: '2.8472vw',
        }}
      />
    </button>
  );
}
export default RedoBtn;
