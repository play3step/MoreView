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
          width: '2.6vw',
          height: '5.3vh',
        }}
      />
    </button>
  );
}
export default UndoBtn;
