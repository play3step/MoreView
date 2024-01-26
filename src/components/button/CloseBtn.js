import Close from '../../assets/close.png';

function CloseBtn({ onClose }) {
  return (
    <button
      onClick={onClose}
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <img
        src={Close}
        alt="Close"
        style={{
          width: '1.6vw',
          height: '10.88vh',
        }}
      />
    </button>
  );
}
export default CloseBtn;
