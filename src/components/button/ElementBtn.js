import Element from '../../assets/element.png';

function ElementBtn() {
  return (
    <button
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
          width: '5.6250vw',
          height: '5.6250vw',
        }}
      />
    </button>
  );
}

export default ElementBtn;
