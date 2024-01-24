import Design from '../../assets/design.png';

function DesignBtn() {
  return (
    <button
      type="button"
      style={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
    >
      <img
        src={Design}
        alt="Design"
        style={{
          width: '5.6250vw',
          height: '5.6250vw',
        }}
      />
    </button>
  );
}

export default DesignBtn;
