import Text from '../../assets/text.png';

function TextBtn({ onClick }) {
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
        src={Text}
        alt="Text"
        style={{
          width: '5.625vw',
          height: '8vh',
        }}
      />
    </button>
  );
}

export default TextBtn;
