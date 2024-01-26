import Element from '../../assets/element.png';

function ElementBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <img
        src={Element}
        alt="Element"
        style={{
          width: '5.625vw',
          height: '8vh',
        }}
      />
    </button>
  );
}

export default ElementBtn;
