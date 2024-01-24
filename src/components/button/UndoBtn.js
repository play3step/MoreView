import Undo from '../../assets/undo.png';

function UndoBtn() {
  return (
    <button
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <img
        src={Undo}
        alt="Undo"
        style={{
          width: '2.4306vw',
          height: '2.8472vw',
        }}
      />
    </button>
  );
}
export default UndoBtn;
