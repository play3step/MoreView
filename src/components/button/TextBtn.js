import Text from '../../assets/text.png';

function TextBtn() {
  return (
    <button
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
          width: '5.6250vw',
          height: '5.6250vw',
        }}
      />
    </button>
  );
}

export default TextBtn;
